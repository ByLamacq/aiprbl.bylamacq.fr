package fr.lamacq

import com.google.gson.Gson
import com.google.gson.JsonArray
import com.google.gson.JsonParser
import com.sun.org.apache.xerces.internal.parsers.DOMParser
import fr.lamacq.vo.AcroFormField
import fr.lamacq.vo.XmlPdfFromJson
import fr.lamacq.webpage.about
import fr.lamacq.webpage.home
import fr.lamacq.webpage.start
import io.ktor.application.*
import io.ktor.features.Compression
import io.ktor.features.ContentNegotiation
import io.ktor.gson.GsonConverter
import io.ktor.gson.gson
import io.ktor.html.*
import io.ktor.http.ContentType
import io.ktor.http.cio.parsePart
import io.ktor.http.content.*
import io.ktor.request.receive
import io.ktor.request.receiveMultipart
import io.ktor.response.respondText
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.util.hex
import io.netty.handler.codec.json.JsonObjectDecoder
import kotlinx.coroutines.runBlocking
import kotlinx.html.*
import kotlinx.io.core.readBytes
import org.apache.pdfbox.pdmodel.PDDocument
import org.apache.pdfbox.rendering.ImageType
import org.apache.pdfbox.rendering.PDFRenderer
import org.w3c.dom.Document
import org.xml.sax.InputSource
import java.io.*
import javax.imageio.ImageIO
import javax.xml.parsers.DocumentBuilder
import javax.xml.parsers.DocumentBuilderFactory

actual class Sample {
    actual fun checkMe() = 42
}

actual object Platform {
    actual val name: String = "JVM"
}

fun main() {
    val port = Integer.valueOf(System.getenv("PORT")) ?: 8080 //embeddedServer(Netty, port = 8080, host = "127.0.0.1")
    embeddedServer(Netty, port = port, host = "127.0.0.1") {
        val currentDir = File(".").absoluteFile
        environment.log.info("Current directory: $currentDir")

        install(Compression) // Gzip IMPORTANT FOR KOTLIN.JS !!!


        install(ContentNegotiation) {
            gson {
                setPrettyPrinting()
            }

        }

        val webDir = listOf(
            "web",
            "../src/jsMain/web",
            "src/jsMain/web"
        ).map {
            File(currentDir, it)
        }.firstOrNull { it.isDirectory }?.absoluteFile ?: error("Can't find 'web' folder for this sample")

        environment.log.info("Web directory: $webDir")

        routing {
            get("/") {
                call.respondHtml {
                    home(this)
                }
            }
            get("/start") {
                call.respondHtml {
                    start(this)
                }
            }
            get("/about") {
                /*
                public static void main(String[] args) throws IOException
    {
        String formTemplate = "src/main/resources/org/apache/pdfbox/examples/interactive/form/FillFormField.pdf";

        try (PDDocument pdfDocument = PDDocument.load(new File(formTemplate)))
        {
            // get the document catalog
            PDAcroForm acroForm = pdfDocument.getDocumentCatalog().getAcroForm();

            // as there might not be an AcroForm entry a null check is necessary
            if (acroForm != null)
            {
                // Retrieve an individual field and set its value.
                PDTextField field = (PDTextField) acroForm.getField( "sampleField" );
                field.setValue("Text Entry");

                // If a field is nested within the form tree a fully qualified name
                // might be provided to access the field.
                field = (PDTextField) acroForm.getField( "fieldsContainer.nestedSampleField" );
                field.setValue("Text Entry");
            }

            // Save and close the filled out form.
            pdfDocument.save("target/FillFormField.pdf");
        }
    }
                 */

                try {
                    val pdfDocument = PDDocument.load(File("cerfa_14434-02.pdf"))

                    val mAcroForm = pdfDocument.documentCatalog.acroForm

                    if (mAcroForm != null) {
                        val mFields = mAcroForm.fields

                        print("[")

                        for (mField in mFields) {
                            println("\"${mField.fullyQualifiedName}\", ")
                        }

                        val mField = mAcroForm.getField("Exploitant")
                        mField.setValue("Grdf")

                        pdfDocument.removePage(1)

                        val pdfRender = PDFRenderer(pdfDocument)
                        val mPdfImgBuf = pdfRender.renderImageWithDPI(0,70f,ImageType.GRAY)
                        ImageIO.write(mPdfImgBuf,"PNG", File("imagetest.png"))

                        pdfDocument.save("teste.pdf")
                    }
                } catch (e: Throwable) {
                    println(e)
                }

                call.respondHtml {
                    about(this)
                }
            }
            post("/uploadxmlfile") {
                val multipart = call.receive<MultiPartData>()
                val out = arrayListOf<String>()
                var mBytesFile: ByteArray? = null
                var mXmlPdfFromJson: Array<Array<AcroFormField>>

                multipart.forEachPart { part ->
                    out += when (part) {
                        is PartData.FormItem -> {

                            if (part.name == "XmlPdf") {
                                val gson = Gson()
                                mXmlPdfFromJson = gson.fromJson(part.value, Array<Array<AcroFormField>>::class.java)
                                println(mXmlPdfFromJson[3][0].value)

                                mXmlPdfFromJson.forEach {
                                    println("${it[0].value}")
                                }

                                pdfBuilder(mXmlPdfFromJson)
                            }

                            "FormItem(${part.name},${part.value})"
                        }
                        is PartData.FileItem -> {

                            part.streamProvider().use { its ->
                                //mBytes = its.readBytes()

                                if (part.name == "XmlFile") {
                                    mBytesFile = its.readBytes()
                                }
                            }

                            /*
                            val mName = part.originalFileName
                            val mFile = File("$mName")

                            part.streamProvider().use { its ->
                                //mBytes = its.readBytes()

                                if (part.name == "XmlFile") {
                                    //mBytesFile = mBytes

                                    mFile.outputStream().buffered().use {
                                        its.copyTo(it)

                                    }
                                }
                            } */

                            //println(mBytesFile?.toString(charset("UTF-8")))

                            mBytesFile?.let {
                                val dbFactory = DocumentBuilderFactory.newInstance()
                                val dBuilder = dbFactory.newDocumentBuilder()
                                //val xmlInput = InputSource(part.streamProvider().bufferedReader())
                                val xmlInput = InputSource(it.inputStream())
                                val mXmlDoc = dBuilder.parse(xmlInput)

                                mXmlDoc.getElementsByTagName("t:noConsultationDuTeleserviceSeize").item(0)?.let { element ->
                                    element.childNodes.item(0)?.let { node ->
                                        node.nodeValue?.let {
                                            println("Numéro de DT : $it. ")
                                        }
                                    }
                                }
                            }



                            "FileItem(${part.name},${part.originalFileName},${mBytesFile?.let { hex(it) }})"
                        }
                        is PartData.BinaryItem -> {
                            "BinaryItem(${part.name},${hex(part.provider().readBytes())})"
                        }
                    }

                    when (part) {
                        is PartData.FormItem -> {
                            if (part.name == "UserId")
                                println("Email : ${part.value}")
                        }
                    }

                    part.dispose()
                }
                call.respondText(out.joinToString("; "))

            }

            post("/buildpdfs") {
                val mXmlPdfFromJson = call.receive<Array<XmlPdfFromJson>>()

                println(mXmlPdfFromJson[0].Exploitant)

                call.respondText("OK")

            }

            static("/static") {
                files(webDir)
            }
        }
    }.start(wait = true)
}