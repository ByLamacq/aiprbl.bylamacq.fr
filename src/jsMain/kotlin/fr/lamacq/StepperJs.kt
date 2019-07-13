package fr.lamacq

import org.w3c.dom.*
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass

var currentTab = 0

// Multi-Step Form
fun stepper() {
    val mPrevBtn = document.getElementById("prevBtn") as HTMLButtonElement
    mPrevBtn.addEventListener("click", {
        nextPrev(-1)
    })
    val mNextBtn = document.getElementById("nextBtn") as HTMLButtonElement
    mNextBtn.addEventListener("click", {
        nextPrev(1)
    })

    showTab(currentTab)
}

/*

// Multi-Step Form
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
} */

fun showTab (n: Int) {
    // This function will display the specified tab of the form...
    val x = document.getElementsByClassName("tab")
    x[n]?.setAttribute("style","display: block;")

    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn")?.setAttribute("style","display: none;")
    } else {
        document.getElementById("prevBtn")?.setAttribute("style","display: inline;")
    }

    if (n == (x.length - 1)) {
        document.getElementById("nextBtn")?.innerHTML = "Envoyer"
        document.getElementById("nextBtn")?.className = "btn btn-success"
    } else {
        document.getElementById("nextBtn")?.innerHTML = "Suivant"
        document.getElementById("nextBtn")?.className = "btn btn-primary"
    }

    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

/*
function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
 */

fun fixStepIndicator(n: Int) {
    // This function removes the "active" class of all steps...
    val x = document.getElementsByClassName("step")
    for (i in 0..x.length)
        x[i]?.removeClass(" active")

    //... and adds the "active" class on the current step:
    x[n]?.addClass(" active")
}

/*
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
*/

fun nextPrev(n: Int): Boolean {
    println("nextPrev($n)")
    // This function will figure out which tab to display
    val x = document.getElementsByClassName("tab")

    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) {
        println("if (n == 1 && !validateForm()) = true")
        return false
    }

    // Hide the current tab:
    x[currentTab]?.setAttribute("style", "display: none;")

    // Increase or decrease the current tab by 1:
    currentTab += n

    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        val mForm = document.getElementById("regForm") as HTMLFormElement
        mForm.submit()
        return false
    }

    // Otherwise, display the correct tab:
    showTab(currentTab)
    return true
}

/*
function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}
 */

fun validateForm(): Boolean {
    // This function deals with validation of the form fields
    var valid = true
    val x = document.getElementsByClassName("tab")
    val y = x[currentTab]?.getElementsByTagName("input")

    // A loop that checks every input field in the current tab:
    y?.let {
        for (i in 0..it.length) {
            // If a field is empty...
            if (it[i] is HTMLInputElement) {
                val mInput = it[i] as HTMLInputElement

                println("Input value : ${mInput.value}")

                if (mInput.value == "" && mInput.required) {
                    // add an "invalid" class to the field:
                    mInput.addClass(" active")

                    // and set the current valid status to false
                    valid = false
                }
            }

        }
    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid)
        document.getElementsByClassName("step")[currentTab]?.addClass(" finish")

    // return the valid status
    return valid
}
