package fr.lamacq.webpage.common

import kotlinx.html.*
import kotlinx.html.dom.append
import org.w3c.dom.html.HTMLBodyElement
import org.w3c.dom.html.HTMLDivElement

fun commonFooter(parent: BODY) {
    parent.footer("text-white-50 py-2 bg-dark fixed-bottom") {
        id = "sticky-footer"
        div("container text-center") {
            a("/about") {
                +"AIPR BL"
            }
            +" est un projet créé et maintenu par "
            a("https://www.linkedin.com/in/baptiste-lamacq-577bb8109") {
                +"LAMACQ Baptiste"
            }
            br
            +"Copyright © 2019 AIPR By LAMACQ. Tous droits réservés."
        }
    }
}
