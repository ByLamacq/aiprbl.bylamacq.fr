

/*
 * animation widget from here: https://github.com/silexlabs/Silex/issues/443
 */
var form = document.forms.namedItem("fileinfo");
form.elements.userid.placeholder = 'test@example.com';

form.elements.button.disabled = true; 

form.elements.ZipFile.addEventListener('change', function(ev) {
  console.log(ev+" : "+form.elements.ZipFile.value)
  if (form.elements.ZipFile.value.substr(form.elements.ZipFile.value.lastIndexOf('.') + 1) === "xml") {
    form.elements.button.disabled = false;
  }
  if (form.elements.ZipFile.value.substr(form.elements.ZipFile.value.lastIndexOf('.') + 1) === "zip") {
    form.elements.button.disabled = false;
  }
}, false);

var mXmlFile;
var resultxmltojson;

form.addEventListener('submit', function(ev) {

  //console.log(form.elements.ZipFile.value)

  // test de file extension
  var oOutput = document.getElementById("formresult"),
      oData = new FormData(form);

  oData.append("CustomField", "Données supplémentaires");
  oData.append("resultxmltojson", JSON.stringify(resultxmltojson));
  oData.delete("ZipFile");
  //oData.append("ZipFile", new Blob([mXmlFile], {type: "application/xml"} ));
  // var fileOfBlob = new File([blob], 'aFileName.json');
  oData.append("ZipFile", mXmlFile);

  // Affichage des paires clefs/valeurs
  for(var pair of oData.entries()) {
    console.log(pair[0]+ ', '+ pair[1]); 
  }

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "/uploadfile", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Envoyé ! "
      //var jsonResponse = JSON.parse(oReq.responseText);
      //oOutput.innerHTML = jsonResponse;
    } else {
      oOutput.innerHTML = "Erreur " + oReq.status + " lors de la tentative d’envoi du fichier.<br \/>";
    }
  };

  oReq.send(oData);
  ev.preventDefault();
}, false);

/*
 * animation widget from here: https://github.com/silexlabs/Silex/issues/443
 */

(function () {
  if (!window.FileReader || !window.ArrayBuffer) {
    $("#error_block").removeClass("hidden").addClass("show");
    return;
  }

var $result = $("#result");
$("#file").on("change", function(evt) {
    // remove content
    $result.html("");
    // be sure to show the results
    $("#result_block").removeClass("hidden").addClass("show");

    // Closure to capture the file information.
    function handleFile(f,s) {
        var $title = $("<h4>", {
            text : f.name
        });
        var $fileContent = $("<ul>");
        $result.append($title);
        $result.append($fileContent);

        var dateBefore = new Date();
        JSZip.loadAsync(f)                                   // 1) read the Blob
        .then(function(zip) {
            var dateAfter = new Date();
            $title.append($("<span>", {
                "class": "small",
                text:" (loaded in " + (dateAfter - dateBefore) + "ms)"
            }));

            zip.forEach(function (relativePath, zipEntry) {  // 2) print entries
		if (zipEntry.name.substr(zipEntry.name.lastIndexOf('.') + 1) === "zip") {
		    console.log(zipEntry.name);
		    //console.log(zipEntry.name.substr(0,zipEntry.name.lastIndexOf('.')));
		    handleFile(zip.file(zipEntry.name).async("arraybuffer"),zipEntry.name.substr(0,zipEntry.name.lastIndexOf('.')));
		}
		if (zipEntry.name.substr(zipEntry.name.lastIndexOf('.') + 1) === "xml" && s == zipEntry.name.substr(0,zipEntry.name.lastIndexOf('.'))) {
		    console.log("find"+zipEntry.name);
		    //readFile(zip.file(zipEntry.name).async("string"));
		    zip.file(zipEntry.name).async("string")
		    .then(function success(text) {                    // 4) display the result
			console.log("success");

            var myOptions = {
            	xmlns: false,
            	//attrsAsObject: false,
            	childrenAsArray: false
            };
			resultxmltojson = xmlToJSON.parseString(text, myOptions);

			parser = new DOMParser();
			xmlDoc = parser.parseFromString(text,"text/xml");

			document.getElementById("demo").innerHTML =
			xmlDoc.getElementsByTagName("t:noConsultationDuTeleserviceSeize")[0].childNodes[0].nodeValue;

    			$result.append($("<div>", {
        		    "class": "alert alert-success",
			    text: "loaded, content = " + xmlDoc
    			})); 
			}, function error(e) {
    			    $result.append($("<div>", {
         		    "class": "alert alert-danger",
        		    text: e
    			}));
		    });
                    zip.file(zipEntry.name).async("arraybuffer")
		    .then(function success(text) {                    // 4) display the result
			console.log("zip.file(zipEntry.name).async(\"arraybuffer\") : success");
                        mXmlFile = new File([new Blob([text], {type: "application/xml"}, zipEntry.name)], zipEntry.name);
			//mXmlFile = text;
			}, function error(e) {
    			    $result.append($("<div>", {
         		    "class": "alert alert-danger",
        		    text: e
    			}));
		    });

		}
                $fileContent.append($("<li>", {
                    text : zipEntry.name
                }));
            });
        }, function (e) {
            $result.append($("<div>", {
                "class" : "alert alert-danger",
                text : "Error reading " + f.name + ": " + e.message
            }));
        });
    }

    function readFile(f) {
        var $title = $("<h4>", {
            text : f
        });
	var $fileContent = $("<ul>");
        $result.append($title);
        $result.append($fileContent);
    }

    var files = evt.target.files;
    for (var i = 0; i < files.length; i++) {
        handleFile(files[i],null);
    }
});
})();

var text, parser, xmlDoc;

text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

    
