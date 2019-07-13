package fr.lamacq.webpage

import fr.lamacq.webpage.common.commonFooter
import fr.lamacq.webpage.common.commonHead
import fr.lamacq.webpage.common.navbar
import fr.lamacq.webpage.forms.formGroup
import fr.lamacq.webpage.forms.formGroupCollapse
import kotlinx.html.*

/*
fun startOld(parent: HTML) {

    commonHead(parent)

    parent.body {

        navbar(this)

        div(classes = "container") {
            // container-fluid
            div("card border-0 shadow my-5") {
                // "card border-0 shadow my-5" "bg-white"
                div("card-body p-5") {
                    // "card-body p-5"
                    h1 { +"Démarrage rapide..." }
                    p { +"This is some text."} //${ResourceBundle.getBundle("app_name")}
                    /*
                    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                     */

                    form("", FormEncType.multipartFormData, FormMethod.post, "mb-3") {
                        attributes["name"] = "fileinfo"
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
                                attributes["placeholder"] = "Renseignez votre Email"
                                required = true
                            }
                        }
                        button(type = ButtonType.submit, classes = "btn btn-primary") {
                            +"Soumettre"
                        }
                        div("formresult pt-3") {
                            attributes["id"] = "formresult"
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
                        /*
                        formGroupCollapse(this,
                            "Projet",
                            InputType.text,
                            "ProjectNumber",
                            "Numéro/Désignation du projet",
                            "",
                            "Renseignez le numéro, la désignation du projet lié à la DT.")*/

                    }

                    div("d-none") {
                        attributes["id"] = "projectDivForm"

                        form("", FormEncType.multipartFormData, FormMethod.post, "mb-3") {
                            attributes["name"] = "projectForm"
                            div("form-group") {
                                label("") {
                                    attributes["for"] = "InputProjectName"
                                    + "Nom du projet"
                                }
                                input(InputType.text, classes = "form-control", name = "ProjectName") {
                                    attributes["id"] = "InputProjectName"
                                    autoComplete = true
                                    autoFocus = true
                                    attributes["aria-describedby"] = "projectNameHelp"
                                    //attributes["placeholder"] = "Nom du projet"
                                    required = true
                                }
                                small("form-text text-muted") {
                                    attributes["id"] = "projectNameHelp"
                                    +"Renseignez le nom du projet lié à la DT."
                                }
                            }
                            formGroup(this,
                                InputType.text,
                                "ProjectNumber",
                                "Numéro/Désignation du projet",
                                "",
                                "Renseignez le numéro, la désignation du projet lié à la DT.")
                            button(type = ButtonType.submit, classes = "btn btn-primary") {
                                +"Soumettre"
                            }
                            div("formresult pt-3") {
                                attributes["id"] = "formresult"
                            }
                        }
                    }
                    /*
                    <form enctype="multipart/form-data" method="POST" name="fileinfo">
    <label>Votre adresse electronique :</label>
    <input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
    <label>Fichier DT, DICT ou ATU au format ZIP :</label>
    <input id="file" type="file" name="ZipFile" accept="application/zip, application/xml" required /><br /><br />
    <input id="button" type="submit" value="Envoyer" />
</form>
<div id="formresult" class="formresult"></div>

<div id="result_block" class="hidden">
    <h3>Content :</h3>
    <div id="result"></div>
</div>
</div>
                     */
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
} */
