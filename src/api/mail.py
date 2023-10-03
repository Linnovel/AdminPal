from flask_mail import Mail, Message
import os

app_mail = Mail()

class SendMail():
    def __init__(self, mail): 
        self.mail = mail
    
    def send_mail(self, email, subject, body):
        msg = Message(subject, sender=self.mail, recipients=[email])
        msg.body = body
        app_mail.send(msg)
        return "Message sent!"
    

FlaskEmail = SendMail(os.environ.get("MAIL"))

