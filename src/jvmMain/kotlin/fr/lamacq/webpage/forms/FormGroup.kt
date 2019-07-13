package fr.lamacq.webpage.forms

import kotlinx.html.*

fun formGroup (parent: DIV, inputType: InputType, name: String, label: String, placeholder: String = "", small: String) {
    parent.div("form-group") {
        label("") {
            attributes["for"] = "Input$name"
            + label
        }
        input(inputType, classes = "form-control", name = "Input$name") {
            attributes["id"] = "Input$name"
            autoComplete = true
            autoFocus = true
            attributes["aria-describedby"] = "${name}Help"
            attributes["placeholder"] = placeholder
            required = true
        }
        small("form-text text-muted") {
            attributes["id"] = "${name}Help"
            + small
        }
    }
}

fun formGroup (parent: DIV, options: List<String>, name: String, label: String, small: String) {
    parent.div("form-group") {
        label("") {
            attributes["for"] = "Input$name"
            + label
        }
        select("form-control") {
            attributes["id"] = "Input$name"
            attributes["aria-describedby"] = "${name}Help"
            for (mOption in options)
                this.option {
                    this.value= mOption
                    this.id= mOption
                    + mOption }
        }
        small("form-text text-muted") {
            attributes["id"] = "${name}Help"
            + small
        }
    }
    /*
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
     */
}

fun formGroup (parent: DIV, optionsText: List<String>, optionsValue: List<String>, multiple: Boolean, name: String, label: String, small: String) {
    parent.div("form-group") {
        label("") {
            attributes["for"] = "Input$name"
            + label
        }
        select("form-control") {
            attributes["id"] = "Input$name"
            this.multiple = true
            attributes["aria-describedby"] = "${name}Help"
            for ((mIndex, mOption) in optionsText.withIndex() )
                this.option {
                    this.value= optionsValue[mIndex]
                    this.id= optionsValue[mIndex]
                    + mOption }
        }
        small("form-text text-muted") {
            attributes["id"] = "${name}Help"
            + small
        }
    }
    /*
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
     */
}