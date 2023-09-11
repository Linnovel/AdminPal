"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Club, Place, Image
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

###### users
@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    serialized_user = [user.serialize() for user in users]
    return jsonify(serialized_user), 200


########### Endpoints de Usuario###################
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

########### Endpoints para club###################
# GET all clubs
@api.route('/club', methods=['GET'])
def get_club():
    clubs = Club.query.all()
    serialized_club = [club.serialize() for club in clubs]
    return jsonify(serialized_club), 200


# GET club by id
@api.route('/club/<int:id>', methods=['GET'])
def get_club_by_id(id):
    current_club = Club.query.get(id)
    if not current_club:
        return jsonify({"error": "club not found"}), 404
    return jsonify(current_club.serialize()), 200


# [POST] create club
@api.route('/club', methods=['POST'])
def create_club():
    data = request.get_json()
    name = data.get("name", None)
    description = data.get("description", None)
    user = data.get("user", None)


    try:
        new_club = Club(name=name, description=description, id_user=user)
        db.session.add(new_club)
        db.session.commit()
        return jsonify(new_club.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error), 500

# PUT club
@api.route('/club/<int:id>', methods=['PUT'])
def update_club_by_id(id):
    data = request.get_json()
    name = data.get("name", None)
    description = data.get("description", None)

    update_club = Club.query.get(id)
    if not update_club:
        return jsonify({"error": "club not found"}), 404

    try:
        update_club.name = name
        update_club.description = description
        db.session.commit()
        return jsonify({"club": update_club.serialize()}), 200

    except Exception as error:
        db.session.rollback()
        return error, 500
    

# delete a club
@api.route('/club/<int:id>', methods=['DELETE'])
def delete_club_by_id(id):
    club_to_delete = Club.query.get(id)

    if not club_to_delete:
        return jsonify({"error": "club not found"}), 404

    try:
        db.session.delete(club_to_delete)
        db.session.commit()
        return jsonify("club deleted successfully"), 200

    except Exception as error:
        db.session.rollback()
        return error, 500


########### Endpoints para Place###################
# GET all places
@api.route('/place', methods=['GET'])
def get_place():
    places = Place.query.all()
    serialized_place = [place.serialize() for place in places]
    return jsonify(serialized_place), 200


# GET by id
@api.route('/place/<int:id>', methods=['GET'])
def get_place_by_id(id):
    current_place = Place.query.get(id)
    if not current_place:
        return jsonify({"error": "place not found"}), 404
    return jsonify(current_place.serialize()), 200


# [POST] create place
@api.route('/place', methods=['POST'])
def create_place():
    data = request.get_json()
    name = data.get("name", None)
    type=data.get("type", None)
    description = data.get("description", None)
    club = data.get("club", None)


    try:
        new_place = Place(name=name, description=description, type=type, id_club=club)
        db.session.add(new_place)
        db.session.commit()
        return jsonify(new_place.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error), 500

# PUT place
@api.route('/place/<int:id>', methods=['PUT'])
def update_place_by_id(id):
    data = request.get_json()
    name = data.get("name", None)
    type=data.get("type", None)
    description = data.get("description", None)


    update_place = Place.query.get(id)
    if not update_place:
        return jsonify({"error": "place not found"}), 404

    try:
        update_place.name = name
        update_place.description = description
        update_place.type = type
        db.session.commit()
        return jsonify({"place": update_place.serialize()}), 200

    except Exception as error:
        db.session.rollback()
        return error, 500
    

# delete a place
@api.route('/place/<int:id>', methods=['DELETE'])
def delete_place_by_id(id):
    place_to_delete = Place.query.get(id)

    if not place_to_delete:
        return jsonify({"error": "Place not found"}), 404

    try:
        db.session.delete(place_to_delete)
        db.session.commit()
        return jsonify("Place deleted successfully"), 200

    except Exception as error:
        db.session.rollback()
        return error, 500

########### Endpoints para images###################
# GET all images
@api.route('/image', methods=['GET'])
def get_image():
    images = Image.query.all()
    serialized_image = [image.serialize() for image in images]
    return jsonify(serialized_image), 200


# GET image by id
@api.route('/image/<int:id>', methods=['GET'])
def get_image_by_id(id):
    current_image = Image.query.get(id)
    if not current_image:
        return jsonify({"error": "image not found"}), 404
    return jsonify(current_image.serialize()), 200


#  create image
@api.route('/image', methods=['POST'])
def create_image():
    data = request.get_json()
    name = data.get("name", None)
    route = data.get("route", None)
    description = data.get("description", None)
    place = data.get("place", None)


    try:
        new_image = Image(name=name, description=description, route=route, id_place=place)
        db.session.add(new_image)
        db.session.commit()
        return jsonify(new_image.serialize()), 201
    
    except Exception as error:
        db.session.rollback()
        return jsonify(error), 500

# PUT image
@api.route('/image/<int:id>', methods=['PUT'])
def update_image_by_id(id):
    data = request.get_json()
    name = data.get("name", None)
    route = data.get("route", None)
    description = data.get("description", None)

    update_image = Image.query.get(id)
    if not update_image:
        return jsonify({"error": "image not found"}), 404

    try:
        update_image.name = name
        update_image.description = description
        update_image.route = route
        db.session.commit()
        return jsonify({"image": update_image.serialize()}), 200

    except Exception as error:
        db.session.rollback()
        return error, 500
    

# delete a image
@api.route('/image/<int:id>', methods=['DELETE'])
def delete_image_by_id(id):
    image_to_delete = Image.query.get(id)

    if not image_to_delete:
        return jsonify({"error": "image not found"}), 404

    try:
        db.session.delete(image_to_delete)
        db.session.commit()
        return jsonify("image deleted successfully"), 200

    except Exception as error:
        db.session.rollback()
        return error, 500
