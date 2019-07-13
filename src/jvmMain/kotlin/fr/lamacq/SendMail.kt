package fr.lamacq

import java.net.URL
import org.apache.commons.mail.DefaultAuthenticator
import org.apache.commons.mail.EmailAttachment
import org.apache.commons.mail.HtmlEmail
import org.apache.commons.mail.MultiPartEmail

fun sendEmail(user: String, tos: Array<String>, ccs: Array<String>, title: String,
              body: String, password: String) {

    val email = HtmlEmail()
    email.hostName = "smtp.googlemail.com"
    email.setSmtpPort(465)
    email.setAuthenticator(DefaultAuthenticator(user, password))
    email.isSSLOnConnect = true
    email.setFrom(user)
    tos.forEach {
        email.addTo(it)
    }
    email.subject = "Test email with inline image sent using Kotlin"
    val kotlinLogoURL = URL("https://kotlinlang.org/assets/images/twitter-card/kotlin_800x320.png")
    val cid = email.embed(kotlinLogoURL, "Kotlin logo")
    email.setHtmlMsg("<html><h1>Kotlin logo</h1><img src=\"cid:$cid\"></html>")
    email.send()
}
fun sendEmailWithAttachement(user: String, tos: Array<String>, ccs: Array<String>, title: String,
              body: String, password: String) {

    // Create the attachment
    val attachment = EmailAttachment()
    attachment.setPath("cerfa_14434-02.pdf")
    attachment.setDisposition(EmailAttachment.ATTACHMENT)
    attachment.setDescription("PDF")
    attachment.setName("cerfa_14434-02.pdf")

    val email = MultiPartEmail()
    email.hostName = "smtp.googlemail.com"
    email.setSmtpPort(465)
    email.setAuthenticator(DefaultAuthenticator(user, password))
    email.isSSLOnConnect = true
    email.setFrom(user)
    tos.forEach {
        email.addTo(it)
    }
    email.subject = "Test email with inline image sent using Kotlin"
    email.setMsg("Veuillez trouver ci joint...")
    // add the attachment
    email.attach(attachment)
    email.send()
}

/*
fun sendEmail(user: String, tos: Array<String>, ccs: Array<String>, title: String,
              body: String, password: String) {
    val props = Properties()
    val host = "smtp.gmail.com"
    with (props) {
        put("mail.smtp.host", host)
        put("mail.smtp.port", "587") // for TLS
        put("mail.smtp.auth", "true")
        put("mail.smtp.starttls.enable", "true")
    }
    val auth = object: Authenticator() {
        protected override fun getPasswordAuthentication() =
            PasswordAuthentication(user, password)
    }
    val session = Session.getInstance(props, auth)
    val message = MimeMessage(session)
    with (message) {
        setFrom(InternetAddress(user))
        for (to in tos) addRecipient(RecipientType.TO, InternetAddress(to))
        for (cc in ccs) addRecipient(RecipientType.TO, InternetAddress(cc))
        setSubject(title)
        setText(body)
    }
    val transport = session.getTransport("smtp")
    with (transport) {
        connect(host, user, password)
        sendMessage(message, message.allRecipients)
        close()
    }
} */