package fr.lamacq.vo

data class XmlPdf(
    val pdf: String,
    val xmlRoot: Array<Array<String>>,
    var type: String = ""
)