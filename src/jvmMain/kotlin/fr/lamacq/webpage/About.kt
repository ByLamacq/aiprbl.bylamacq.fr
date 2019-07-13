package fr.lamacq.webpage

import fr.lamacq.Sample
import fr.lamacq.hello
import fr.lamacq.webpage.common.commonFooter
import fr.lamacq.webpage.common.commonHead
import fr.lamacq.webpage.common.navbar
import kotlinx.html.*

fun about(parent: HTML) {

    commonHead(parent)

    parent.body {

        navbar(this)

        div(classes = "container") {
            // container-fluid
            div("card border-0 shadow my-5") {
                // "card border-0 shadow my-5" "bg-white"
                div("card-body p-5") {
                    // "card-body p-5"
                    h1 { +"A Propos" }
                    p { +"This is some text." }


                    +"${hello()} from Ktor. Check me value: ${Sample().checkMe()}"

                    div(".bg-white") {
                        id = "js-response"
                        +"Loading..."
                    }
                }
            }

        }

        commonFooter(this)

        script(src = "/static/require.min.js") {
        }

        script {
            unsafe {
                raw(
                    "require.config({baseUrl: '/static'});\n"
                            + "require(['/static/aipr.js', '/static/kotlin.js'], function(js) { js.fr.lamacq.helloWorld('Hi'); });\n"
                )
            }
        }
    }
}