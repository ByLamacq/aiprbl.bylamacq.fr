package fr.lamacq
/*
import org.w3c.dom.*
import org.w3c.dom.parsing.DOMParser
import kotlin.browser.document
import kotlin.js.Date
import kotlin.js.Json
import kotlin.js.json

@Suppress("unused")
@JsName("xmlReader")
fun xmlReader(mXml: String) {
    println("Bonjour tout le monde!")

    val mParser = DOMParser()
    val mXmlDoc = mParser.parseFromString(mXml, "application/xml")

    // Fill upload Form
    val mFormResulToXml = document.getElementById("XmlFileResult")
    mXmlDoc.getElementsByTagName("t:noConsultationDuTeleserviceSeize")[0]?.let { element ->
        element.childNodes[0]?.let { node ->
            node.nodeValue?.let {
                mFormResulToXml?.appendChild(document.createTextNode("Numéro de DT : $it. "))
            }
        }
    }
/*
    val mFormResulToXml1 = document.getElementById("InputProjectNumber") as HTMLInputElement
    mXmlDoc.getElementsByTagName("t:dateDeLaDeclaration")[0]?.let {element ->
        element.childNodes[0]?.let {node ->
            node.nodeValue?.let {
                println(it)
                val mDate = Date(it)
                val mDateOption = dateLocaleOptions {
                    weekday = "long"
                    year = "numeric"
                    month = "long"
                    day = "numeric"
                }
                mFormResulToXml1.setAttribute("value", mDate.toLocaleDateString("fr-FR", mDateOption))
                //mFormResulToXml1.inputMode = "text"
                mFormResulToXml1.readOnly = true
            }
        }
    } */

    val mJson = json()

    mJson.set("f", 1)





    //val mNodeList = mXmlDoc.getElementsByTagNameNS("t:", "*")

    // Fill Project form
    val mProjectNumber = listOf<String>("dossierConsultation", "DT", "noAffaireDuResponsableDuProjet")
    val mInputProjectNumber = document.getElementById("InputProjectNumber") as HTMLInputElement
    xmlSingleNodeReader(mProjectNumber, mXmlDoc, mInputProjectNumber)

    val mProjectAddress = listOf<String>("dossierConsultation", "DT", "emplacementDuProjet", "adresse")
    val mInputProjectAddress = document.getElementById("InputProjectAddress") as HTMLInputElement
    xmlSingleNodeReader(mProjectAddress, mXmlDoc, mInputProjectAddress)

    val mProjectPostalCode = listOf<String>("dossierConsultation", "DT", "emplacementDuProjet", "CP")
    val mInputProjectPostalCode = document.getElementById("InputProjectPostalCode") as HTMLInputElement
    xmlSingleNodeReader(mProjectPostalCode, mXmlDoc, mInputProjectPostalCode)

    val mProjectCity = listOf<String>("dossierConsultation", "DT", "emplacementDuProjet", "communePrincipale")
    val mInputProjectCity = document.getElementById("InputProjectCity") as HTMLInputElement
    xmlSingleNodeReader(mProjectCity, mXmlDoc, mInputProjectCity)

    val mProjectDescription = listOf<String>("dossierConsultation", "DT", "projetEtSonCalendrier", "decrivezLeProjet")
    val mInputProjectDescription = document.getElementById("InputProjectDescription") as HTMLInputElement
    xmlSingleNodeReader(mProjectDescription, mXmlDoc, mInputProjectDescription)

    // Fill ProjectOwner form
    val mProjectOwnerEntity = listOf<String>("dossierConsultation", "DT", "typeEntite")
    val mInputProjectOwnerEntity = document.getElementById("InputProjectOwnerEntity") as HTMLSelectElement
    xmlSingleNodeReader(mProjectOwnerEntity, mXmlDoc, mInputProjectOwnerEntity)

    val mProjectOwnerName = listOf<String>("dossierConsultation", "DT", "responsableDuProjet", "denomination")
    val mInputProjectOwnerName = document.getElementById("InputProjectOwnerName") as HTMLInputElement
    xmlSingleNodeReader(mProjectOwnerName, mXmlDoc, mInputProjectOwnerName)

    val mProjectOwnerCountry = listOf<String>("dossierConsultation", "DT", "responsableDuProjet", "pays")
    val mInputProjectOwnerCountry = document.getElementById("InputProjectOwnerCountry") as HTMLInputElement
    xmlSingleNodeReader(mProjectOwnerCountry, mXmlDoc, mInputProjectOwnerCountry)

    // Fill ProjectManager form
    val mProjectManagerName =
        listOf<String>("dossierConsultation", "DT", "representantDuResponsableDeProjet", "denomination")
    val mInputProjectManagerName = document.getElementById("InputProjectManagerName") as HTMLInputElement
    xmlSingleNodeReader(mProjectManagerName, mXmlDoc, mInputProjectManagerName)

    val mProjectManagerAddress =
        listOf<String>("dossierConsultation", "DT", "representantDuResponsableDeProjet", "voie")
    val mInputProjectManagerAddress = document.getElementById("InputProjectManagerAddress") as HTMLInputElement
    xmlSingleNodeReader(mProjectManagerAddress, mXmlDoc, mInputProjectManagerAddress)

    val mProjectManagerPostalCode =
        listOf<String>("dossierConsultation", "DT", "representantDuResponsableDeProjet", "codePostal")
    val mInputProjectManagerPostalCode = document.getElementById("InputProjectManagerPostalCode") as HTMLInputElement
    xmlSingleNodeReader(mProjectManagerPostalCode, mXmlDoc, mInputProjectManagerPostalCode)

    val mProjectManagerCity =
        listOf<String>("dossierConsultation", "DT", "representantDuResponsableDeProjet", "commune")
    val mInputProjectManagerCity = document.getElementById("InputProjectManagerCity") as HTMLInputElement
    xmlSingleNodeReader(mProjectManagerCity, mXmlDoc, mInputProjectManagerCity)

    val mProjectManagerManager =
        listOf<String>("dossierConsultation", "DT", "representantDuResponsableDeProjet", "personneAcontacter")
    val mInputProjectManagerManager = document.getElementById("InputProjectManagerManager") as HTMLInputElement
    xmlSingleNodeReader(mProjectManagerManager, mXmlDoc, mInputProjectManagerManager)

    val mProjectManagerPhone = listOf<String>("dossierConsultation", "DT", "representantDuResponsableDeProjet", "tel")
    val mInputProjectManagerPhone = document.getElementById("InputProjectManagerPhone") as HTMLInputElement
    xmlSingleNodeReader(mProjectManagerPhone, mXmlDoc, mInputProjectManagerPhone)

    val mProjectManagerEmail =
        listOf<String>("dossierConsultation", "DT", "representantDuResponsableDeProjet", "courriel")
    val mInputProjectManagerEmail = document.getElementById("InputProjectManagerEmail") as HTMLInputElement
    xmlSingleNodeReader(mProjectManagerEmail, mXmlDoc, mInputProjectManagerEmail)

    // Fill Dt Form
    val mDtNumber = listOf("dossierConsultation", "DT", "noConsultationDuTeleserviceSeize")
    val mInputDtNumber = document.getElementById("InputDtNumber") as HTMLInputElement
    xmlSingleNodeReader(mDtNumber, mXmlDoc, mInputDtNumber)

    val mDtCreationDate = listOf("dossierConsultation", "DT", "dateDeLaDeclaration")
    val mInputDtCreationDate = document.getElementById("InputDtCreationDate") as HTMLInputElement
    xmlDateSingleNodeReader(mDtCreationDate, mXmlDoc, mInputDtCreationDate)

    val mDtGeographiqueProjection = listOf("dossierConsultation", "DT", "emprise", "geometrie")
    val mInputDtGeographiqueProjection = document.getElementById("InputDtGeographiqueProjection") as HTMLInputElement
    xmlAttributeSingleNodeReader(mDtGeographiqueProjection, "srsName", mXmlDoc, mInputDtGeographiqueProjection)

    val mDtGeographiqueCoordonates =
        listOf(
            "dossierConsultation",
            "DT",
            "emprise",
            "geometrie",
            "surfaceMembers",
            "Polygon",
            "exterior",
            "LinearRing",
            "coordinates"
        )
    val mInputDtGeographiqueCoordonates = document.getElementById("InputDtGeographiqueCoordonates") as HTMLInputElement
    xmlSingleNodeReader(mDtGeographiqueCoordonates, mXmlDoc, mInputDtGeographiqueCoordonates)

    val mDtNatureWork = listOf<String>("dossierConsultation", "DT", "projetEtSonCalendrier", "natureDesTravaux")
    val mInputDtNatureWork = document.getElementById("InputDtNatureWork") as HTMLSelectElement
    xmlSingleNodeReader(mDtNatureWork, mXmlDoc, mInputDtNatureWork)

    val mDtStartDate =
        listOf<String>("dossierConsultation", "DT", "projetEtSonCalendrier", "datePrevuePourLeCommencementDesTravaux")
    val mInputDtStartDate = document.getElementById("InputDtStartDate") as HTMLInputElement
    xmlDateSingleNodeReader(mDtStartDate, mXmlDoc, mInputDtStartDate)

    val mDtDuration = listOf<String>("dossierConsultation", "DT", "projetEtSonCalendrier", "dureeDuChantierEnJours")
    val mInputDtDuration = document.getElementById("InputDtDuration") as HTMLInputElement
    xmlSingleNodeReader(mDtDuration, mXmlDoc, mInputDtDuration)

}

fun xmlSingleNodeReader(root: List<String>, xmlDoc: Document, destination: HTMLInputElement) {
    var mNodeList =
        xmlDoc.getElementsByTagNameNS("http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2", root.last())

    if (mNodeList.length == 0)
        mNodeList = xmlDoc.getElementsByTagNameNS("http://www.opengis.net/gml/3.2", root.last())
    //val mRootSize = root.size

    if (mNodeList.length > 1) {
        println("LOG D : xmlSingleNodeReader = mNodeList.length > 1 (${mNodeList.length})")
        for (mIndex in 0..mNodeList.length) {
            mNodeList[mIndex]?.parentNode?.nodeName?.let { parentNodeValue ->
                println("Parent node value = $parentNodeValue / for $root")
                if (parentNodeValue == "t:${root[root.size - 2]}") {
                    xmlNodeValueReader(mNodeList, mIndex)?.let {
                        destination.setAttribute("value", it)
                    }
                }
            }
        }
    } else {
        println("LOG D : xmlSingleNodeReader = !mNodeList.length > 1 (${mNodeList.length})")
        xmlNodeValueReader(mNodeList, 0)?.let {
            destination.setAttribute("value", it)
        }
    }
}

fun xmlSingleNodeReader(root: List<String>, xmlDoc: Document, destination: HTMLSelectElement) {
    val mNodeList =
        xmlDoc.getElementsByTagNameNS("http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2", root.last())
    //val mRootSize = root.size

    if (mNodeList.length > 1) {
        println("LOG D : xmlSingleNodeReader = mNodeList.length > 1 (${mNodeList.length})")
        for (mIndex in 0..mNodeList.length) {
            mNodeList[mIndex]?.parentNode?.nodeName?.let { parentNodeName ->
                if (parentNodeName == "t:${root[root.size - 2]}") {
                    xmlNodeValueReader(mNodeList, mIndex)?.let {
                        //destination.namedItem(it)?.selected = true // Do not work!
                        destination.namedItem(it)?.setAttribute("selected", "")
                    }
                }
            }
        }
    } else {
        println("LOG D : xmlSingleNodeReader = !mNodeList.length > 1 (${mNodeList.length})")
        xmlNodeValueReader(mNodeList, 0)?.let { nodeValue ->
            destination.namedItem(nodeValue)?.let {
                //it.selected = true // Do not work!
                it.setAttribute("selected", "")
            }
        }
    }
}

fun xmlDateSingleNodeReader(root: List<String>, xmlDoc: Document, destination: HTMLInputElement) {
    val mNodeList =
        xmlDoc.getElementsByTagNameNS("http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2", root.last())
    //val mRootSize = root.size

    if (mNodeList.length > 1) {
        println("LOG D : xmlSingleNodeReader = mNodeList.length > 1 (${mNodeList.length})")
        for (mIndex in 0..mNodeList.length) {
            mNodeList[mIndex]?.parentNode?.nodeValue?.let { parentNodeValue ->
                if (parentNodeValue == root[root.size - 2]) {
                    xmlNodeValueReader(mNodeList, mIndex)?.let {
                        val mDate = Date(it)

                        val mDateOption = dateLocaleOptions {
                            weekday = "long"
                            year = "numeric"
                            month = "long"
                            day = "numeric"
                        }
                        destination.setAttribute("value", mDate.toLocaleDateString("fr-FR", mDateOption))
                        //mFormResulToXml1.inputMode = "text"
                        destination.readOnly = true
                    }
                }
            }
        }
    } else {
        println("LOG D : xmlSingleNodeReader = !mNodeList.length > 1 (${mNodeList.length})")
        xmlNodeValueReader(mNodeList, 0)?.let {
            var mDate = Date(it)

            if (mDate.getTime().isNaN()) {
                println("Error date: is NaN : $it")
                mDate = Date(it.substringBefore("+"))
                println(it)
            }

            val mDateOption = dateLocaleOptions {
                weekday = "long"
                year = "numeric"
                month = "long"
                day = "numeric"
            }
            mDate?.let {
                destination.setAttribute("value", mDate.toLocaleDateString("fr-FR", mDateOption))
                //mFormResulToXml1.inputMode = "text"
                destination.readOnly = true
            }
        }
    }
}

fun xmlAttributeSingleNodeReader(
    root: List<String>,
    attribute: String,
    xmlDoc: Document,
    destination: HTMLInputElement
) {
    val mNodeList =
        xmlDoc.getElementsByTagNameNS("http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2", root.last())
    //val mRootSize = root.size

    if (mNodeList.length > 1) {
        println("LOG D : xmlSingleNodeReader = mNodeList.length > 1 (${mNodeList.length})")
        for (mIndex in 0..mNodeList.length) {
            mNodeList[mIndex]?.parentNode?.nodeName?.let { parentNodeValue ->
                println("Parent node value = $parentNodeValue / for $root")
                if (parentNodeValue == "t:${root[root.size - 2]}") {
                    xmlNodeAttributeReader(mNodeList, mIndex, attribute)?.let {
                        destination.setAttribute("value", it)
                    }
                }
            }
        }
    } else {
        println("LOG D : xmlSingleNodeReader = !mNodeList.length > 1 (${mNodeList.length})")
        xmlNodeValueReader(mNodeList, 0)?.let {
            destination.setAttribute("value", it)
        }
    }
}

fun xmlNodeValueReader(nodeList: HTMLCollection, index: Int): String? {
    return nodeList[index]?.let { element ->
        element.childNodes[0]?.let { node ->
            node.nodeValue?.let {
                println(it)
                it
            }
        }
    }
}

fun xmlNodeAttributeReader(nodeList: HTMLCollection, index: Int, attribute: String): String? {
    return nodeList[index]?.let { element ->
        element.getAttribute(attribute)?.let {
            println(it)
            it
        }
    }
} */
