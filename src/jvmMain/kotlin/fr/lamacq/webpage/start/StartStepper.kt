package fr.lamacq.webpage.start

import fr.lamacq.webpage.forms.formGroup
import kotlinx.html.*

fun startStepper(parent: BODY) {

    parent.form("/uploadfile", FormEncType.multipartFormData, FormMethod.post, "mb-3 was-validated") {
        attributes["name"] = "fileinfo"
        attributes["id"] = "regForm"
        //h1 { +"Démarrage rapide :" }
        div("tab") {
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
        }
        div("tab") {
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
            }
        }
        div("tab") {
            h3 { +"Le projet" }
            formGroup(
                this,
                InputType.text,
                "ProjectName",
                "Nom du projet",
                "",
                "Renseignez le nom du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectNumber",
                "Numéro/Désignation du projet",
                "",
                "Renseignez le numéro, la désignation du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectAddress",
                "Adresse du projet",
                "",
                "Renseignez l'adresse où est localisé le projet lié à la DT."
            )
            formGroup(
                this,
                InputType.number,
                "ProjectPostalCode",
                "Code postal du projet",
                "",
                "Renseignez le code postal où est localisé le projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectCity",
                "Ville du projet",
                "",
                "Renseignez la ville où est localisé le projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectDescription",
                "Description du projet",
                "",
                "Décrivez le projet lié à la DT."
            )
        }
        div("tab") {
            h3 { +"Le maître d'ouvrage" }
            formGroup(
                this,
                listOf("PERSONNE_MORALE", "PERSONNE_PHYSIQUE"),
                "ProjectOwnerEntity",
                "Personnalité juridique",
                "Renseignez la personnalité juridique du maître d'ouvrage."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectOwnerName",
                "Nom du maître d'ouvrage",
                "",
                "Renseignez le nom du maître d'ouvrage du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectOwnerService",
                "Service du maître d'ouvrage (s'il y a lieu)",
                "",
                "Renseignez le service du maître d'ouvrage du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectOwnerAddress",
                "Adresse du maître d'ouvrage",
                "",
                "Renseignez l'adresse du maître d'ouvrage du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.number,
                "ProjectOwnerPostalCode",
                "Code postal du maître d'ouvrage",
                "",
                "Renseignez le code postal où est localisé le maître d'ouvrage du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectOwnerCity",
                "Ville du maître d'ouvrage",
                "",
                "Renseignez la ville où est localisé le maître d'ouvrage du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.tel,
                "ProjectOwnerPhone",
                "Téléphone du maître d'ouvrage",
                "",
                "Renseignez le téléphone du maître d'ouvrage du projet lié à la DT."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectOwnerCountry",
                "Pays du maître d'ouvrage",
                "",
                "Renseignez le pays du maître d'ouvrage du projet lié à la DT."
            )
        }
        div("tab") {
            h3 { +"Le représentant du maître d'ouvrage" }
            formGroup(
                this,
                InputType.text,
                "ProjectManagerName",
                "Nom du représentant du maître d'ouvrage",
                "",
                "Renseignez le nom du représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectManagerService",
                "Service du représentant du maître d'ouvrage (s'il y a lieu)",
                "",
                "Renseignez le service du représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectManagerAddress",
                "Adresse du représentant du maître d'ouvrage",
                "",
                "Renseignez l'adresse du représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.number,
                "ProjectManagerPostalCode",
                "Code postal du représentant du maître d'ouvrage",
                "",
                "Renseignez le code postal où est localisé le représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectManagerCity",
                "Ville du représentant du maître d'ouvrage",
                "",
                "Renseignez la ville où est localisé le représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.text,
                "ProjectManagerManager",
                "Nom du responsable de projet du représentant du maître d'ouvrage",
                "",
                "Renseignez la ville où est localisé le représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.tel,
                "ProjectManagerPhone",
                "Téléphone fixe du représentant du maître d'ouvrage",
                "",
                "Renseignez le téléphone fixe du représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.tel,
                "ProjectManagerMobile",
                "Téléphone mobile du représentant du maître d'ouvrage",
                "",
                "Renseignez le téléphone mobile du représentant du maître d'ouvrage du projet."
            )
            formGroup(
                this,
                InputType.email,
                "ProjectManagerEmail",
                "Mail du représentant du maître d'ouvrage",
                "",
                "Renseignez l'adresse mail du représentant du maître d'ouvrage du projet."
            )
        }
        div("tab") {
            h3 { +"Le maître d'oeuvre" }
            formGroup(
                this,
                InputType.text,
                "PrimeContractorName",
                "Nom du maître d'oeuvre",
                "",
                "Renseignez le nom du maître d'oeuvre du projet."
            )
            formGroup(
                this,
                InputType.text,
                "PrimeContractorService",
                "Service du maître d'oeuvre (s'il y a lieu)",
                "",
                "Renseignez le service du maître d'oeuvre du projet."
            )
            formGroup(
                this,
                InputType.text,
                "PrimeContractorAddress",
                "Adresse du maître d'oeuvre",
                "",
                "Renseignez l'adresse du maître d'oeuvre du projet."
            )
            formGroup(
                this,
                InputType.number,
                "PrimeContractorPostalCode",
                "Code postal du maître d'oeuvre",
                "",
                "Renseignez le code postal où est localisé le maître d'oeuvre du projet."
            )
            formGroup(
                this,
                InputType.text,
                "PrimeContractorCity",
                "Ville du maître d'oeuvre",
                "",
                "Renseignez la ville où est localisé le maître d'oeuvre du projet."
            )
            formGroup(
                this,
                InputType.text,
                "PrimeContractorManager",
                "Nom du responsable de projet du maître d'oeuvre",
                "",
                "Renseignez la ville où est localisé le maître d'oeuvre du projet."
            )
            formGroup(
                this,
                InputType.tel,
                "PrimeContractorPhone",
                "Téléphone fixe du maître d'oeuvre",
                "",
                "Renseignez le téléphone fixe du maître d'oeuvre du projet."
            )
            formGroup(
                this,
                InputType.tel,
                "PrimeContractorMobile",
                "Téléphone mobile du maître d'oeuvre",
                "",
                "Renseignez le téléphone mobile du maître d'oeuvre."
            )
            formGroup(
                this,
                InputType.email,
                "PrimeContractorEmail",
                "Mail du maître d'oeuvre",
                "",
                "Renseignez l'adresse mail du maître d'oeuvre du projet."
            )
        }
        div("tab") {
            h3 { +"La Déclaration de Travaux" }
            formGroup(
                this,
                InputType.text,
                "DtNumber",
                "Numéro de DT",
                "",
                "Numéro de la présente déclaration de travaux."
            )
            formGroup(
                this,
                InputType.text,
                "DtCreationDate",
                "Date de création de la DT",
                "",
                "Date de création de la présente déclaration de travaux."
            )
            formGroup(
                this,
                InputType.text,
                "DtGeographiqueProjection",
                "Système de projection géographique",
                "",
                "Système de projection géographique de la présente déclaration de travaux."
            )
            formGroup(
                this,
                InputType.number,
                "DtGeographiqueCoordonates",
                "Coordonnées géographiques",
                "",
                "Coordonnées géographiques de la présente déclaration de travaux."
            )
            formGroup(
                this,
                listOf(
                    "Construction",
                    "Construction spéciale (ERP, IGH, ICPE)",
                    "Curage de fossés/de berges",
                    "Décapage, profilage de chaussées",
                    "Démolition",
                    "Drainage, sous-solage",
                    "Élagage avec branche au delà des distances de sécurité du code du travail",
                    "Élagage avec branche en deçà des distances de sécurité du code du travail",
                    "Élagage d’arbre enchevêtré dans réseau isolé",
                    "Emploi de source de chaleur",
                    "Forage horizontal ou oblique",
                    "Forage vertical / Carottage",
                    "Pose ou réparation de réseaux de chaleur",
                    "Pose ou réparation de réseaux souterrains (hors réseaux de chaleur)",
                    "Remblaiement",
                    "Terrassement, fouille, excavation",
                    "Travaux en fouille déjà ouverte",
                    "Travaux sans terrassement ni fouille ni enfoncement",
                    "Autres"
                ),
                listOf(
                    "CNS", "CSP", "CUR", "DEC", "DEM", "DRA", "ELG", "EBL", "ERE", "ESC", "FOH",
                    "FOV", "CHA", "SOU", "RBL", "TER", "OUV", "SFP", "OTR"
                ),
                true,
                "DtNatureWork",
                "Nature des travaux",
                "Nature des travaux de la présente déclaration de travaux."
            )
            formGroup(
                this,
                InputType.text,
                "DtStartDate",
                "Date prévionnelle des travaux",
                "",
                "Date prévionnelle de démarrage des travaux de la présente déclaration de travaux."
            )
            formGroup(
                this,
                InputType.tel,
                "DtDuration",
                "Durée prévionnelle des travaux",
                "",
                "Durée prévionnelle des travaux de la présente déclaration de travaux."
            )
        }

        div("d-flex justify-content-between") {
            button(type = ButtonType.button, classes = "btn btn-secondary") {
                attributes["id"] = "prevBtn"
                +"Précédent"
            }
            button(type = ButtonType.button, classes = "btn btn-primary") {
                attributes["id"] = "nextBtn"
                +"Suivant"
            }
        }
        /*
        button(type = ButtonType.submit, classes = "btn btn-primary") {
            +"Soumettre"
        }*/
        div {
            attributes["style"] = "text-align:center;margin-top:40px;"
            span("step")
            span("step")
            span("step")
            span("step")
            span("step")
            span("step")
            span("step")
        }
        /*
        div("formresult pt-3") {
            attributes["id"] = "formresult"
        } */
    }


/*
                    div("d-none") {
                        attributes["id"] = "projectDivForm"

                        form("", FormEncType.multipartFormData, FormMethod.post, "mb-3") {
                            attributes["name"] = "projectForm"
                            div("form-group") {
                                label("") {
                                    attributes["for"] = "InputProjectName"
                                    +"Nom du projet"
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
                            }/*
                            formGroup(
                                this,
                                InputType.text,
                                "ProjectName",
                                "Nom du projet",
                                "",
                                "Renseignez le nom du projet lié à la DT."
                            )*/
                            button(type = ButtonType.submit, classes = "btn btn-primary") {
                                +"Soumettre"
                            }
                            div("formresult pt-3") {
                                attributes["id"] = "formresult"
                            }
                        }
                    }*/
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
