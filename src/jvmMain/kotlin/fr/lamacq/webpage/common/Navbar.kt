package fr.lamacq.webpage.common

import kotlinx.html.*

fun navbar (parent: BODY) {
    parent.nav(classes = "navbar navbar-expand-md bg-dark navbar-dark") {
        div("container") {
            a(classes = "navbar-brand") {
                href = "#"
                img("", "/static/img/ic_launcher.png", "d-inline-block align-top") {
                    attributes["width"] = "30"
                    attributes["height"] = "30"
                }
                +"AIPR BL"
            }
            button(classes = "navbar-toggler") {
                type = ButtonType.button
                attributes["data-toggle"] = "collapse"
                attributes["data-target"] = "#collapsibleNavbar"
                span(classes = "navbar-toggler-icon")
            }
            div(classes = "collapse navbar-collapse") {
                id = "collapsibleNavbar"
                ul(classes = "navbar-nav mr-auto") {
                    li(classes = "nav-item") {
                        a(classes = "nav-link") {
                            href = "/"
                            +"Accueil"
                        }
                    }
                    li(classes = "nav-item") {
                        a(classes = "nav-link") {
                            href = "/start"
                            +"Démarrage rapide..."
                        }
                    }
                    li(classes = "nav-item") {
                        a(classes = "nav-link") {
                            href = "/about"
                            +"A propos"
                        }
                    }
                }
                /*
                <ul class="nav navbar-nav navbar-right">
<#if user??>
<li><p class="navbar-text">Bienvenue ${user.displayName}</p></li>
<li><a href="/signout"><span class="glyphicon glyphicon-log-out"> Déconnexion</a></li>
<#else>
<li><a href="/signin"><span class="glyphicon glyphicon-log-in"></span> Identification</a></li>
<li><a href="/signup"><span class="glyphicon glyphicon-user"></span> S'inscrire</a></li>
</#if>
</ul>
                 */
                ul("navbar-nav ") {
                    li("nav-item") {
                        a("/signin") {
                            i("fas fa-fw fa-sign-in-alt")
                            +" Identification"
                        }
                    }
                    li("nav-item") {
                        a("/signup") {
                            i("fas fa-fw fa-user")
                            +" S'inscrire"
                        }
                    }
                }
            }
        }
    }
}