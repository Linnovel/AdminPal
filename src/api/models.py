from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#modelo de usuario
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    club= db.relationship("Club", backref="user", lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

#modelo de club
class Club(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    id_user= db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    place= db.relationship("Place", backref="club", lazy=True)


    def __repr__(self):
        return f'<Club {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
           
    }
#modelo de lugares
class Place(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    type = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    id_club= db.Column(db.Integer, db.ForeignKey("club.id"), nullable=False)
    image=db.relationship("Image", backref="place", lazy=True)


    def __repr__(self):
        return f'<Place {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "tpe": self.type,
            "description": self.description,
           
    }
#modelo de imagenes
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    route = db.Column(db.String(150), unique=False, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    id_place= db.Column(db.Integer, db.ForeignKey("place.id"), nullable=False)


    def __repr__(self):
        return f'<Image {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "route": self.route,
            "description": self.description,
           
    }
