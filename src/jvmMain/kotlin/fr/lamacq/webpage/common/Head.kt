package fr.lamacq.webpage.common

import kotlinx.html.*

fun commonHead (parent: HTML) {
    parent.head {
        lang = "fr"
        meta { charset = "utf-8" }
        meta {
            name = "author"
            content = "LAMACQ Baptiste"
        }
        meta {
            name = "description"
            content = "La Zone Apprentissage des documents web\n" +
                    "du MDN a pour but de donner aux débutants du Web tout ce qu'ils doivent\n" +
                    "savoir pour commencer le développement de pages webs et d'applications.e"
        }
        meta {
            name = "viewport"
            content = "width=device-width, initial-scale=1"
        }
        title("AIPR By LAMACQ")

        link {
            href = "/static/bootstrap-4.3.1.min.css"
            rel = "stylesheet"
        }
        link {
            href = "/static/css/all.min.css"
            rel = "stylesheet"
        }
        script { src = "/static/jquery-3.4.1.min.js" }
        script { src = "/static/bootstrap-4.3.1.min.js" }
        style {
            unsafe {
                raw(
                    "body {\n" + //:before
                            "  background: url('/static/img/bg_img.jpg') no-repeat center center fixed;\n" +
                            //"  opacity:0.5;\n" +
                            "  -webkit-background-size: cover;\n" +
                            "  -moz-background-size: cover;\n" +
                            "  background-size: cover;\n" +
                            "  -o-background-size: cover;\n" +
                            "}\n"+
                ".step {\n" +
                        "  height: 15px;\n" +
                        "  width: 15px;\n" +
                        "  margin: 0 2px;\n" +
                        "  background-color: #bbbbbb;\n" +
                        "  border: none;  \n" +
                        "  border-radius: 50%;\n" +
                        "  display: inline-block;\n" +
                        "  opacity: 0.5;\n" +
                        "}\n" +
                        "\n" +
                        ".step.active {\n" +
                        "  opacity: 1;\n" +
                        "}\n" +
                        "\n" +
                        "/* Mark the steps that are finished and valid: */\n" +
                        ".step.finish {\n" +
                        "  background-color: #4CAF50;\n" +
                        "}\n"+
                            ".tab {\n" +
                            "  display: none;\n" +
                            "}"

                )
            }
        }
    }
}