"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('register', methods=['POST'])
def register_user():
    
    data = request.get_json()
    email = data.get("email", None)
    password  = data.get("password", None)

    #Encriptacion
    hashed_password = generate_password_hash(password)
    new_register = User(email=email, password=hashed_password, is_active=True)

    try:
        db.session.add(new_register)
        db.session.commit()
        return jsonify("Nuevo usuario registrado con exito"), 201

    except Exception as error:
        db.session.rollback()
        return jsonify({"error" : error}), 500
