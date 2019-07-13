package fr.lamacq

import fr.lamacq.vo.AcroFormField
import fr.lamacq.vo.XmlPdfFromJson
import io.ktor.http.content.PartData
import org.apache.pdfbox.pdmodel.PDDocument
import org.xml.sax.InputSource
import java.io.File
import javax.xml.parsers.DocumentBuilderFactory

fun pdfBuilder (structureArray: Array<Array<AcroFormField>>) {

    //var mPdfDocument: PDDocument? = null
    /*
    try {
        pdfDocument = PDDocument.load(File("cerfa_14434-02.pdf"))
    } catch (e: Throwable) {
        println(e)
    } */

    structureArray.forEachIndexed { index, structureItemArray ->
        //val mPdfDocument = pdfDocument


        try {
            val mPdfDocument = PDDocument.load(File("cerfa_14434-02.pdf"))

            val mAcroForm = mPdfDocument?.documentCatalog?.acroForm

            if (mAcroForm != null) {
                val mFields = mAcroForm.fields
                /*
                print("[")

                for (mField in mFields) {
                    println("\"${mField.fullyQualifiedName}\", ")
                } */
                structureItemArray.forEach {
                    val mField = mAcroForm.getField(it.name)

                    /*println("fieldType : ${mField.fieldType} / alternateFieldName : ${mField.alternateFieldName}" +
                            " / fullyQualifiedName : ${mField.fullyQualifiedName} / fieldFlags : ${mField.fieldFlags}" +
                            " / partialName : ${mField.partialName} / valueAsString : ${mField.valueAsString}") */

                    if (mField.fieldType == "Tx") //Btn, Ch
                        mField.setValue(it.value)

                    if (mField.fieldType == "Btn") {
                        when (mField.fullyQualifiedName) {
                            "ResponsableProjetCase" -> {
                                if (it.value == "PERSONNE_PHYSIQUE") {
                                    mField.setValue("physique")
                                } else {
                                    mField.setValue("morale")
                                }
                            }
                            "Declaration_conjointe" -> {
                                if (it.value == "false") {
                                    mField.setValue("Off")
                                } else {
                                    mField.setValue("Oui")
                                }
                            }
                            "TST" -> {
                                if (it.value == "true") {
                                    mField.setValue("TST_oui")
                                } else {
                                    mField.setValue("TST_non")
                                }
                            }
                            "Investigations" -> {
                                if (it.value == "true") {
                                    mField.setValue("IC_oui")
                                } else {
                                    mField.setValue("IC_non")
                                }
                            }
                            "Souhait_recepisse_DTDICTconjoint" -> {
                                if (it.value == "true") {
                                    mField.setValue("Oui")
                                } else {
                                    mField.setValue("Off")
                                }
                            }
                            "PlanCouleur_DT" -> {
                                if (it.value == "true") {
                                    mField.setValue("Oui")
                                } else {
                                    mField.setValue("Off")
                                }
                            }
                            "PlansVectoriels_DT" -> {
                                if (it.value == "true") {
                                    mField.setValue("Oui")
                                } else {
                                    mField.setValue("Off")
                                }
                            }
                            "Prox_reseaux_elec_CaseDT" -> {
                                if (it.value == "true") {
                                    mField.setValue("Oui")
                                } else {
                                    mField.setValue("Off")
                                }
                            }
                            "IC_avec_DICT" -> {
                                if (it.value == "true") {
                                    mField.setValue("Oui")
                                } else {
                                    mField.setValue("Off")
                                }
                            }
                            "Envoi_resultats_IC" -> {
                                if (it.value == "true") {
                                    mField.setValue("Oui")
                                } else {
                                    mField.setValue("Off")
                                }
                            }
                            else -> mField.setValue(it.value)
                        }

                    }

                    if (mField.fieldType == "Ch") {
                        mField.setValue(it.value)
                    }

                }

                /*
                var mField = mAcroForm.getField("Exploitant")
                mField.setValue(structure.Exploitant)

                mField = mAcroForm.getField("Destinataire")
                mField.setValue(structure.Destinataire)

                mField = mAcroForm.getField("Complement_adresse")
                mField.setValue(structure.Complement_adresse)

                mField = mAcroForm.getField("No_voie")
                mField.setValue(structure.No_voie)

                mField = mAcroForm.getField("CP")
                mField.setValue(structure.CP)

                mField = mAcroForm.getField("Commune")
                mField.setValue(structure.Commune)

                mField = mAcroForm.getField("Pays")
                mField.setValue(structure.Pays) */


                mPdfDocument.removePage(1)

                mPdfDocument.save("output/${structureItemArray[0].value}_${index}_DT.pdf")

                mPdfDocument.close()

                println("${structureItemArray[0].value}_${index}_DT.pdf save!")


            }
        } catch (e: Throwable) {
            println(e)
        }
    }

    sendEmail("hummingapps.fr@gmail.com", arrayOf("ikarishinji98@hotmail.com"), arrayOf(""), "Test","test","ISakabane98@!")
    sendEmailWithAttachement("hummingapps.fr@gmail.com", arrayOf("ikarishinji98@hotmail.com"), arrayOf(""), "Test","test","ISakabane98@!")
}