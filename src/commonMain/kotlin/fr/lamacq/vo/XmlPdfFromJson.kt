package fr.lamacq.vo

data class XmlPdfFromJson(
    val Exploitant: String,
    val Destinataire: String,
    val Complement_adresse: String,
    val No_voie: String,
    val Lieudit_BP: String,
    val CP: String,
    val Commune: String,
    val Pays: String
)