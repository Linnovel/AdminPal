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

#validamos al usuario y le asignamos un token
@api.route('/login', methods=['POST'])
def user_login():

    data = request.get_json()
    email= data.get('email', None)
    password= data.get('password', None)

    #validamos que el usrio exista
    user_exist= User.query.filter_by(email=email).first()
    if not user_exist:
        return jsonify({"error":"User not found"}), 404
    
    #obtenemos el password y lo comparamos
    password_check= check_password_hash(user_exist.password, password)
    if not password_check:
        return jsonify({"error":"Password incorrecto"}), 401
   
    #se crea el token
    token_data={"id": user_exist.id, "email": user_exist.email}
    token= create_access_token(token_data)
    return jsonify({"token": token}), 200
    
    