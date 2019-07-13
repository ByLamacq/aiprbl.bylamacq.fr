package fr.lamacq.webpage.forms

import kotlinx.html.*

fun formGroupCollapse (parent: DIV, collapseName:String, inputType: InputType, name: String, label: String, placeholder: String = "", small: String) {
    parent.div("card-header") {
        a("#card$collapseName", "", "card-link") {
            attributes["data-toggle"] = "collapse"
            + collapseName
        }
    }
    parent.div ("collapse") {
        attributes["id"] = "card$collapseName"
        attributes["data-parent"] = "#result_block"
        div("card-body") {
            attributes["id"] = collapseName
            form("", FormEncType.multipartFormData, FormMethod.post, "mb-3") {
                attributes["name"] = "projectForm"
                //formGroup(this, inputType, name, label, placeholder, small)
            }
        }
    }
}
