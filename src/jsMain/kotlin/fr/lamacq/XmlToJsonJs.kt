package fr.lamacq

import fr.lamacq.utils.XmlToPdfDt
import fr.lamacq.utils.XmlToPdfStructure
import fr.lamacq.vo.XmlPdf
import org.w3c.dom.*
import org.w3c.dom.parsing.DOMParser
import org.w3c.dom.url.URL
import kotlin.browser.document
import kotlin.js.Date
import kotlin.js.Json
import kotlin.js.json

@Suppress("unused")
@JsName("xmlToJson")
fun xmlToJson(mXml: String): ArrayList<ArrayList<Json>> {
    println("We read Xml file...")

    val mParser = DOMParser()
    val mXmlDoc = mParser.parseFromString(mXml, "application/xml")

    println("We build Json from Xml file...")

    val mJsonArray = arrayListOf<ArrayList<Json>>()

    val mXmlStructures = xmlNodesReader(arrayOf("dossierConsultation", "listeDesOuvrages", "ouvrage"), mXmlDoc)
    //val mXmlDt = xmlNodeReader(listOf("dossierConsultation", "DT"), mXmlDoc)[0]?.let { it }

    for (mIndex in 0..mXmlStructures.length) {
        mXmlStructures[mIndex]?.let {
            mJsonArray.add(jsonStructureBuilder(it, mXmlDoc))
        }
    }

    return mJsonArray
}
/*
fun xmlNodeReader (root: List<String>, xmlDoc: Document): HTMLCollection {
    var mNodeList =
        xmlDoc.getElementsByTagNameNS("http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2", root.last())

    if (mNodeList.length == 0)
        mNodeList = xmlDoc.getElementsByTagNameNS("http://www.opengis.net/gml/3.2", root.last())

    if (mNodeList.length == 0)
        mNodeList = xmlDoc.getElementsByTagNameNS("http://xml.insee.fr/schema", root.last())
    //val mRootSize = root.size

    return mNodeList
} */

fun xmlNodesReader(path: Array<String>, xmlDoc: Document): HTMLCollection {
    var mElements: HTMLCollection = xmlDoc.getElementsByTagName("*")

    for (mDirectory in path) {
        var mElement = xmlDoc.getElementsByTagNameNS(
            "http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2", mDirectory
        )

        if (mElement.length == 0)
            mElement = xmlDoc.getElementsByTagNameNS("http://www.opengis.net/gml/3.2", mDirectory)

        if (mElement.length == 0)
            mElement = xmlDoc.getElementsByTagNameNS("http://xml.insee.fr/schema", mDirectory)

        mElements = mElement
    }

    /*
    var mNodeList =
        xmlDoc.getElementsByTagNameNS("http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2", root.last())

    if (mNodeList.length == 0)
        mNodeList = xmlDoc.getElementsByTagNameNS("http://www.opengis.net/gml/3.2", root.last())

    if (mNodeList.length == 0)
        mNodeList = xmlDoc.getElementsByTagNameNS("http://xml.insee.fr/schema", root.last()) */
    //val mRootSize = root.size

    return mElements
}

fun xmlNodeReader(path: Array<String>, xmlElement: Element): HTMLCollection {
    var mNodeList =
        xmlElement.getElementsByTagNameNS(
            "http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2",
            path.last()
        )

    if (mNodeList.length == 0)
        mNodeList = xmlElement.getElementsByTagNameNS("http://www.opengis.net/gml/3.2", path.last())

    if (mNodeList.length == 0)
        mNodeList = xmlElement.getElementsByTagNameNS("http://xml.insee.fr/schema", path.last())
    //val mRootSize = root.size

    return mNodeList
}


fun jsonStructureBuilder(mStructure: Element, mXmlDoc: Document): ArrayList<Json> {
    val mStructureArray = arrayListOf<Json>()


    for (mXmlPdf in XmlToPdfStructure) {
        val mJsonStructureItem = json()
        var mXmlPdfValue: String = ""

        for (mXmRoot in mXmlPdf.xmlRoot) {
            xmlNodeValueReader(xmlNodeReader(mXmRoot, mStructure), 0)?.let {
                if (mXmlPdfValue == "") {
                    mXmlPdfValue = it
                } else {
                    mXmlPdfValue += " $it"
                }
            }
        }

        mJsonStructureItem.set("name", mXmlPdf.pdf)
        mJsonStructureItem.set("value", mXmlPdfValue)

        mStructureArray.add(mJsonStructureItem)
    }

    for (mXmlPdf in XmlToPdfDt) {
        val mJsonStructureItem = json()
        var mXmlPdfValue: String = ""

        for (mXmRoot in mXmlPdf.xmlRoot) {
            val mResult = xmlNodesReader(mXmRoot, mXmlDoc)

            if (mResult.length > 1) {
                when (mXmlPdf.pdf) {
                    "Nature_Travaux1_DT" -> {
                        xmlNodeValueReader(mResult, 0)?.let {
                            mXmlPdfValue = it
                        }
                    }
                    "Nature_Travaux2_DT" -> {
                        xmlNodeValueReader(mResult, 1)?.let {
                            mXmlPdfValue = it
                        }
                    }
                    "Nature_Travaux3_DT" -> {
                        xmlNodeValueReader(mResult, 2)?.let {
                            mXmlPdfValue = it
                        }
                    }
                    "Nature_Travaux4_DT" -> {
                        xmlNodeValueReader(mResult, 3)?.let {
                            mXmlPdfValue = it
                        }
                    }
                    "Nature_Travaux5_DT" -> {
                        xmlNodeValueReader(mResult, 4)?.let {
                            mXmlPdfValue = it
                        }
                    }
                    "Mode_recepisse_DT" -> {
                        println("Mode_recepisse_DT : ${mResult.length}")
                        if (mResult.length > 0) {
                            when (mXmRoot.last()) {
                                "modeReceptionElectronique" -> mXmlPdfValue = "Par voie électronique"
                                "modeReceptionCourrier" -> mXmlPdfValue = "Par courrier"
                                "modeReceptionFax" -> mXmlPdfValue = "Par fax"
                            }
                        }
                    }
                    else -> {
                        xmlNodeValueReader(mResult, 0)?.let {
                            mXmlPdfValue = it
                        }
                    }
                }
            } else {

                xmlNodeValueReader(mResult, 0)?.let {
                    //xmlNodesReader(mXmRoot, mXmlDoc)
                    if (mXmlPdf.type == "DateDate") {
                        var mDate = Date(it)
                        if (mDate.getTime().isNaN()) {
                            println("Error date: is NaN : $it")
                            mDate = Date(it.substringBefore("+"))
                            println(it)
                        }
                        mXmlPdfValue = mDate.getDate().toString()
                    }
                    if (mXmlPdf.type == "DateMonth") {
                        var mDate = Date(it)
                        if (mDate.getTime().isNaN()) {
                            println("Error date: is NaN : $it")
                            mDate = Date(it.substringBefore("+"))
                            println(it)
                        }
                        mXmlPdfValue = mDate.getMonth().toString()
                    }
                    if (mXmlPdf.type == "DateFullYear") {
                        var mDate = Date(it)
                        if (mDate.getTime().isNaN()) {
                            println("Error date: is NaN : $it")
                            mDate = Date(it.substringBefore("+"))
                            println(it)
                        }
                        mXmlPdfValue = mDate.getFullYear().toString()
                    }
                    if (mXmlPdf.type == "MultiLine1") {
                        if (it.length > 48) {
                            var mIndex = 47
                            while (mXmlPdfValue == "") {
                                if (it[mIndex].isWhitespace()) {
                                    mXmlPdfValue = it.substring(0, mIndex).trim()
                                }
                                mIndex -= 1
                            }

                        } else {
                            mXmlPdfValue = it
                        }
                    }
                    if (mXmlPdf.type == "MultiLine2") {
                        if (it.length > 48) {
                            var mIndex = 47
                            while (mXmlPdfValue == "") {
                                if (it[mIndex].isWhitespace()) {
                                    mXmlPdfValue = it.substring(mIndex).trim()
                                }
                                mIndex -= 1
                            }

                        }
                    }
                    if (mXmlPdf.type == "NodeName") {
                        println("Mode_recepisse_DT : ${mResult.length}")
                        when (mXmRoot.last()) {
                            "modeReceptionElectronique" -> mXmlPdfValue = "Par voie électronique"
                            "modeReceptionCourrier" -> mXmlPdfValue = "Par courrier"
                            "modeReceptionFax" -> mXmlPdfValue = "Par fax"
                        }
                    }
                    if (mXmlPdf.type == "") {
                        mXmlPdfValue = it
                    }
                }
            }
        }

        mJsonStructureItem.set("name", mXmlPdf.pdf)
        mJsonStructureItem.set("value", mXmlPdfValue)

        mStructureArray.add(mJsonStructureItem)
    }

    println("mStructureArray : ${JSON.stringify(mStructureArray)}")

    return mStructureArray
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
}

//fun String.asResource(): URL? = object {}.javaClass.getResource(this)
