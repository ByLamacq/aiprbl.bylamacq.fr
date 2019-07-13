package fr.lamacq

import org.w3c.dom.*
import org.w3c.dom.parsing.DOMParser
import org.w3c.files.Blob
import org.w3c.files.BlobPropertyBag
import org.w3c.files.File
import org.w3c.xhr.FormData
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.*
import kotlin.dom.addClass
import kotlin.dom.removeClass
import kotlin.js.Json
import kotlin.js.Promise
import kotlin.js.json

actual class Sample {
    actual fun checkMe() = 12
}

actual object Platform {
    actual val name: String = "JS"
}


@Suppress("unused")
@JsName("helloWorld")
fun helloWorld(salutation: String) {
    println("Bonjour tout le monde!")
    val message = "$salutation from Kotlin.JS ${hello()}, check me value: ${Sample().checkMe()}"
    document.getElementById("js-response")?.textContent = message
}

@Suppress("unused")
@JsName("start")
fun start(salutation: String) {

    println("Start")

    var mXmlFile: File? = null

    var mXmlPdfJson = arrayListOf<ArrayList<Json>>()

    fun unzip(mFile: Any, mHtmlElement: Element, mZipName: String = "") {
        val mArrayList = document.createElement("ul")
        mArrayList.setAttribute("id", "ArrayList")
        mHtmlElement.appendChild(mArrayList)

        JSZip.loadAsync(mFile).then { zip ->
            println(jsTypeOf(zip))
            zip.forEach { relativePath, zipEntry ->
                println("forEach : $relativePath & ${zipEntry.name}")
                // if (zipEntry.name.substringAfterLast('.', "") == )
                println(zipEntry.name.substringAfterLast('.', ""))

                val mZipEntryName = document.createElement("li")
                mZipEntryName.appendChild(document.createTextNode(zipEntry.name))
                mArrayList.appendChild(mZipEntryName)

                if (zipEntry.name.substringAfterLast('.', "") == "zip") {
                    unzip(zip.file(zipEntry.name).async("arraybuffer"), mArrayList, zipEntry.name)
                }

                if (zipEntry.name.substringAfterLast('.', "") == "xml" &&
                    mZipName.substringBeforeLast('.', "") == zipEntry.name.substringBeforeLast('.', "")
                ) {
                    println("Find XML file")

                    zip.file(zipEntry.name).async("string").then { mXmlText ->
                        println("String")

                        if (mXmlText is String) {

                            //xmlReader(text)
                            mXmlPdfJson = xmlToJson(mXmlText)

                            /*
                            val mRequestpdf = XMLHttpRequest()
                            mRequestpdf.open("POST", "/buildpdfs", true)
                            mRequestpdf.setRequestHeader("Content-Type", "application/json")
                            mRequestpdf.onload = {
                                println(mRequestpdf.statusText)
                                if (mRequestpdf.statusText == "OK") {
                                    println("Envoyé ! ")
                                    //var jsonResponse = JSON.parse(oReq.responseText);
                                    //oOutput.innerHTML = jsonResponse;
                                } else {
                                    println("Erreur ${mRequestpdf.status} lors de la tentative d’envoi du fichier.")
                                }
                            }
                            mRequestpdf.send(JSON.stringify(mXmlPdfJson)) */


                            val mParser = DOMParser()
                            val mXmlDoc = mParser.parseFromString(mXmlText, "application/xml")

                            // Fill upload Form
                            val mFormResulToXml = document.getElementById("XmlFileResult")
                            mXmlDoc.getElementsByTagName("t:noConsultationDuTeleserviceSeize")[0]?.let { element ->
                                element.childNodes[0]?.let { node ->
                                    node.nodeValue?.let {
                                        mFormResulToXml?.appendChild(document.createTextNode("Numéro de DT : $it. "))
                                    }
                                }
                            }
                        }
                    }
                    /*
                    zip.file(zipEntry.name).async("arraybuffer").then { mXmlArrayBuffer ->
                        println("ArrayBuffer")

                        val mBlobOption = BlobPropertyBag("application/xml")
                        val mXmlBlob = Blob(arrayOf(mXmlArrayBuffer),mBlobOption)

                        mXmlFile = File(arrayOf(mXmlBlob),zipEntry.name)

                    } */

                    zip.file(zipEntry.name).async("blob").then { mXmlBlob ->
                        println("Blob")
                        /*
                        val mBlobOption = BlobPropertyBag("application/xml")
                        val mXmlBlob = Blob(arrayOf(mXmlArrayBuffer),mBlobOption)
                        */
                        mXmlFile = File(arrayOf(mXmlBlob),zipEntry.name)

                    }
                }
            }
        }
    }

    fun handleFile(f: File, div: HTMLDivElement) {
        println("fun handleFile : ${f.name}")

        val mFileName = document.createElement("h4")
        mFileName.appendChild(document.createTextNode(f.name))
        div.appendChild(mFileName)

        unzip(f, div)

        val resultBlock = document.getElementById("result_block")
        resultBlock?.removeClass("d-none")
        resultBlock?.addClass("d-block")

        /*
        val mProjectDivForm = document.getElementById("projectDivForm")
        mProjectDivForm?.removeClass("d-none")
        mProjectDivForm?.addClass("d-block")
         */
    }

    println("Bonjour tout le monde!")

    val mInput = document.getElementById("InputZipFile") as HTMLInputElement
    val div = document.getElementById("result") as HTMLDivElement
    val mForm = document.forms.namedItem("uploadxmlfile") as HTMLFormElement

    mForm.addEventListener("submit", {
        val mOutput = document.getElementById("formresult")
        val mData = FormData(mForm)
        //mData.append("CustomField", "Données supplémentaires")
        mData.append("XmlPdf", JSON.stringify(mXmlPdfJson))
        mXmlFile?.let {
            println("LOG D - mForm.addEventListener : XmlFile not null")
            mData.delete("ZipFile")
            mData.append("XmlFile", it)
        }


        val mRequest = XMLHttpRequest()
        mRequest.open("POST", "/uploadxmlfile", true)

        mRequest.onload = {
            println(mRequest.statusText)
            if (mRequest.statusText == "OK") { // && mRequest.readyState.equals(4)
                mOutput?.appendChild(document.createTextNode("Envoyé ! "))
                //var jsonResponse = JSON.parse(oReq.responseText);
                //oOutput.innerHTML = jsonResponse;
            } else {
                mOutput?.appendChild(document.createTextNode("Erreur ${mRequest.status} lors de la tentative d’envoi du fichier."))
            }
        }
        mRequest.send(mData)

/*
        val mRequestpdf = XMLHttpRequest()
        mRequestpdf.setRequestHeader("Content-Type", "application/json")
        mRequestpdf.open("POST", "/buildpdfs", true)
        mRequestpdf.onload = {
            println(mRequestpdf.statusText)
            if (mRequestpdf.statusText == "OK") {
                mOutput?.appendChild(document.createTextNode("Envoyé ! "))
                //var jsonResponse = JSON.parse(oReq.responseText);
                //oOutput.innerHTML = jsonResponse;
            } else {
                mOutput?.appendChild(document.createTextNode("Erreur ${mRequestpdf.status} lors de la tentative d’envoi du fichier."))
            }
        }
        mRequestpdf.send(JSON.stringify(mXmlPdfJson)) */

        it.preventDefault()
    })


    // mInput.addEventListener("change", {event -> handleFiles(event) })

    mInput.addEventListener("change", { event ->
        println("change")
        val mFiles = mInput.files
        mFiles?.let {
            for (i in it.asList()) {
                handleFile(i, div)
            }
        }
    })

    //Stepper
    //stepper()
}

external val JSZip: jszip

abstract external class jszip {
    fun loadAsync(f: Any): Promise<ZipObject>
}

abstract external class ZipObject {
    fun forEach(callback: (String, File) -> Unit)
    fun file(name: Any): ZipObject
    //fun async(type: String): Any
    fun async(type: String): Promise<Any>
}