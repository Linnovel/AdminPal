from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#modelo de usuario
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name= db.Column(db.String(100), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_club = db.Column(db.Boolean(), unique=False, nullable=True)
    club= db.relationship("Club", backref="user", lazy=True)
    reservas= db.relationship("Reserva", backref="user", lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "is_club": self.is_club
            # do not serialize the password, its a security breach
        }

#modelo de club
class Club(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    estado = db.Column(db.String(120), unique=False, nullable=False)
    ciudad = db.Column(db.String(120), unique=False, nullable=False)
    direccion = db.Column(db.String(200), unique=False, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    email = db.Column(db.String(200), unique=False, nullable=False)
    phone = db.Column(db.BigInteger, unique=False, nullable=False)
    id_user = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    place = db.relationship("Place", backref="club", lazy=True)


    def __repr__(self):
        return f'<Club {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "ciudad": self.ciudad,
            "estado": self.estado,
            "direccion": self.direccion,
            "description": self.description,
            "email": self.email,
            "phone": self.phone,
            "id_user": self.id_user
           
    }
#modelo de lugares
class Place(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    type = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    id_club= db.Column(db.Integer, db.ForeignKey("club.id"), nullable=False)
    image=db.relationship("Image", backref="place", lazy=True)
    reserva=db.relationship("Reserva", backref="place", lazy=True)


    def __repr__(self):
        return f'<Place {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "description": self.description,
            "id_club": self.id_club,
           
    }
#modelo de imagenes
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img_url  = db.Column(db.String(150), unique=False, nullable=False)
    id_place= db.Column(db.Integer, db.ForeignKey("place.id"), nullable=False)


    def __repr__(self):
        return f'<Image {self.img_url}>'

    def serialize(self):
        return {
            "id": self.id,
            "img_url": self.img_url,
            "id_place": self.id_place
 
    }

#modelo de reservas
class Reserva(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha  = db.Column(db.Date, unique=False, nullable=False)
    time= db.Column(db.String(10), unique=False, nullable=False)
    id_place= db.Column(db.Integer, db.ForeignKey("place.id"), nullable=False)
    id_user = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)


    def __repr__(self):
        return f'<Reserva {self.fecha}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "time": self.time,
            "id_place": self.id_place,
            "id_user": self.id_user
         
    }
