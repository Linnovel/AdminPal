from firebase_admin import credentials, initialize_app, storage
import os

#creamos la conexion
firebase_credentials= credentials.Certificate(os.environ.get("FIREBASE_JSON"))
default_app= initialize_app(firebase_credentials, {"storageBucket": os.environ.get("FIREBASE_BUCKET")})

class FirebaseBucket: 
    def __init__(self): 
        self.bucket= storage.bucket()
    
    def upload_file(self, file, name):
        new_photo=self.bucket.blob(name)
        new_photo.upload_from_file(file)
        new_photo.make_public()
        if new_photo.public_url:
            return new_photo.public_url
        else:
            return False
        
    def delete_file(self, name):
        photo=self.bucket.blob(name)
        photo.delete()
        return True
        
bucket=FirebaseBucket()
        