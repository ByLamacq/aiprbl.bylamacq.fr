package fr.lamacq.webpage

import fr.lamacq.webpage.common.commonFooter
import fr.lamacq.webpage.common.commonHead
import fr.lamacq.webpage.common.navbar
import fr.lamacq.webpage.forms.formGroup
import fr.lamacq.webpage.forms.formGroupCollapse
import kotlinx.html.*

fun start(parent: HTML) {

    commonHead(parent)

    parent.body {

        navbar(this)

        div(classes = "container") {
            // container-fluid
            div("card border-0 shadow my-5") {
                // "card border-0 shadow my-5" "bg-white"
                div("card-body p-5") {
                    // "card-body p-5"
                    h1 { +"Démarrage rapide" }
                    p {
                        +"Renseignez votre emeil, Selectionnez votre fichier archive (zip) télécharger sur le site"
                        +" de l'INERIS "
                        a("https://www.reseaux-et-canalisations.ineris.fr/", "_blank", "INERIS") {
                            +"www.reseaux-et-canalisations.ineris.fr"
                        }
                        +"ou votre descripteur de DT (xml) et laissez"
                        +" nous faire le reste, Nous procederons l'envoi groupé de cahque DT à sont destinataire."
                    } //${ResourceBundle.getBundle("app_name")}
                    p {
                        +"Par ailleurs, en selectionnant l'option \"Mettre a jour ma base de donnée\", vous avez"
                        +" la possbilité de vous constituer un répertoire afin de gagner encore en efficacité."
                    }

                    form("/uploadxmlfile", FormEncType.multipartFormData, FormMethod.post, "mb-3 was-validated") {
                        attributes["name"] = "uploadxmlfile"
                        attributes["id"] = "uploadxmlfileform"
                        //h1 { +"Démarrage rapide :" }
                        div("start") {
                            div("form-group") {
                                label("") {
                                    attributes["for"] = "InputEmail"
                                    +"Adresse mail"
                                }
                                input(InputType.email, classes = "form-control", name = "UserId") {
                                    attributes["id"] = "InputEmail"
                                    autoComplete = true
                                    autoFocus = true
                                    attributes["aria-describedby"] = "emailHelp"
                                    attributes["placeholder"] = "Renseignez votre Email"
                                    required = true
                                }

                                small("form-text text-muted") {
                                    attributes["id"] = "emailHelp"
                                    +"Nous ne partagerons jamais votre email avec qui que ce soit."
                                }
                            }

                            div("form-group") {
                                label("") {
                                    attributes["for"] = "InputZipFile"
                                    +"Fichier DT, DICT ou ATU au format ZIP :"
                                }
                                input(InputType.file, classes = "form-control", name = "ZipFile") {
                                    attributes["id"] = "InputZipFile"
                                    attributes["accept"] = "application/zip, application/xml"
                                    attributes["placeholder"] = "Indiquez l'emplacement de votre fichier"
                                    required = true
                                }
                                div("valid-feedback") {
                                    attributes["id"] = "XmlFileResult"
                                    +"Valide ! "
                                }
                                div("invalid-feedback") {
                                    +"Merci de remplir ce champ"
                                }

                            }

                            div("form-group form-check") {
                                label("form-check-label") {
                                    input(InputType.checkBox, name = "updatedb", classes = "form-check-input") {
                                        +" Mettre a jour ma base de donnée"
                                    }
                                }
                            }

                            button(type = ButtonType.submit, classes = "btn btn-primary") {
                                +"Valider"
                            }
                        }

                        div("d-none") {
                            attributes["id"] = "result_block"

                            div("card-header") {
                                a("#collapseOne", "", "card-link") {
                                    attributes["data-toggle"] = "collapse"
                                    +"Contenu du fichier"
                                }
                            }
                            div("collapse") {
                                attributes["id"] = "collapseOne"
                                attributes["data-parent"] = "#result_block"
                                div("card-body") {
                                    attributes["id"] = "result"
                                }
                            }
                        }
                    }
                }
            }
        }

        commonFooter(this)

        script(src = "/static/jszip.min.js") {
        }
        script(src = "/static/require.min.js") {
        }

        script {
            unsafe {
                raw(
                    "require.config({baseUrl: '/static'});\n"
                            + "require(['/static/aipr.js', '/static/kotlin.js','/static/jszip.min.js'], function(js) { js.fr.lamacq.start('Hi'); });\n"
                )
            }
        }
    }
}