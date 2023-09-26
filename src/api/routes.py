"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Club, Place, Image
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from api.firebase import bucket

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#login
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



########### Endpoints de Usuario###################

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    serialized_user = [user.serialize() for user in users]
    return jsonify(serialized_user), 200

 #GET user by id
@api.route('/user/<int:id>', methods=['GET'])
@jwt_required()
def get_user_by_id(id):
    current_user = User.query.get(id)
    if not current_user:
        return jsonify({"error": "user not found"}), 404
    return jsonify(current_user.serialize()), 200

# create user
@api.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    name = data.get("name", None)
    last_name = data.get("last_name", None)
    email= data.get("email", None)
    password= data.get("password", None)
     # validamos que el usuario no exista
    user_exist = User.query.filter_by(email=email).first()
    if user_exist:
        return jsonify({"error": "User exist"}), 404
    
    #si no existe continuamos
    hashed_password = generate_password_hash(password)

    try:
        new_user = User(name=name, last_name=last_name, email=email, password=hashed_password, is_active=True)
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500

# edit user
@api.route('/user/<int:id>', methods=['PUT'])
@jwt_required()
def edit_user(id):
    data = request.get_json()
    name = data.get("name", None)
    last_name = data.get("last_name", None)
    email= data.get("email", None)
    password= data.get("password", None)

     # validamos que el usuario exista
    user_exist = User.query.filter_by(id=id).first()
    if not user_exist:
        return jsonify({"error": "User exist"}), 404
    
    #si no existe el paswword se le asigna su mismo valor
    if not password:
       password=user_exist.password

    #de los contrario se hashead el nuevo
    password = generate_password_hash(password)

     
    try:
        

        update_user = User.query.get(id)

        update_user.password= password
        update_user.name = name
        update_user.last_name = last_name
        update_user.email= email
        db.session.commit()
        return jsonify({"User": update_user.serialize()}), 200

    except Exception as error:
        db.session.rollback()
        return jsonify(error), 500

#delete user
@api.route('/user/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_user_by_id(id):
    user_to_delete = User.query.get(id)

    if not user_to_delete:
        return jsonify({"error": "user not found"}), 404

    try:
        db.session.delete(user_to_delete)
        db.session.commit()
        return jsonify("user deleted successfully"), 200

    except Exception as error:
        db.session.rollback()
        return error, 500
    
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


# GET club by id by users
@api.route('/club/user', methods=['GET'])
@jwt_required()
def get_club_by_id_user():
    token = get_jwt_identity()
    current_club = Club.query.filter_by(id_user=token["id"]).all() #devuelve un arreglo de objetos
 #   if not current_club:
  #      return jsonify({"error": "clubs not found"}), 404
    return  jsonify([club.serialize() for club in current_club]), 200 #serializamos el arreglo de objetos


# [POST] create club
@api.route('/club', methods=['POST'])
@jwt_required()
def create_club():
    data = request.get_json()
    token = get_jwt_identity()
    name = data.get("name", None)
    description = data.get("description", None)
    estado= data.get("estado", None)
    ciudad= data.get("ciudad", None)
    direccion= data.get("direccion", None)
    email= data.get("email", None)
    phone= data.get("phone", None)
    

    try:
        new_club = Club(name=name, description=description, estado=estado, ciudad=ciudad, direccion=direccion, email=email, phone=phone, id_user=token["id"])
        db.session.add(new_club)
        db.session.commit()
        return jsonify(new_club.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500
    

# PUT club
@api.route('/club/<int:id>', methods=['PUT'])
@jwt_required()
def update_club_by_id(id):
    data = request.get_json()
    name = data.get("name", None)
    description = data.get("description", None)
    estado= data.get("estado", None)
    ciudad= data.get("ciudad", None)
    direccion= data.get("direccion", None)
    email= data.get("email", None)
    phone= data.get("phone", None)

    update_club = Club.query.get(id)
    if not update_club:
        return jsonify({"error": "club not found"}), 404

    try:
        update_club.name = name
        update_club.description = description
        update_club.estado= estado
        update_club.ciudad= ciudad
        update_club.direccion= direccion
        update_club.email= email
        update_club.phone= phone
        db.session.commit()
        return jsonify({"club": update_club.serialize()}), 200

    except Exception as error:
        db.session.rollback()
        return error, 500
    

# delete a club
@api.route('/club/<int:id>', methods=['DELETE'])
@jwt_required()
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


# GET place by id by club
@api.route('/club/place/<int:id_club>', methods=['GET'])
@jwt_required()
def get_place_by_id_club(id_club):
    token = get_jwt_identity()
    current_place = Place.query.filter_by(id_club=id_club).all() #devuelve un arreglo de objetos
    if not current_place:
        return jsonify({"error": "place not found"}), 404
    return  jsonify([place.serialize() for place in current_place]), 200 #serializamos el arreglo de objetos

# GET by id
@api.route('/place/<int:id>', methods=['GET'])
@jwt_required()
def get_place_by_id(id):
    current_place = Place.query.get(id)
    if not current_place:
        return jsonify({"error": "place not found"}), 404
    return jsonify(current_place.serialize()), 200


# [POST] create place
@api.route('/place/<int:id_club>', methods=['POST'])
@jwt_required()
def create_place(id_club):
    data = request.get_json()
    name = data.get("name", None)
    type=data.get("type", None)
    description = data.get("description", None)

   
    try:
        new_place = Place(name=name, description=description, type=type, id_club=id_club)
        db.session.add(new_place)
        db.session.commit()

        return jsonify(new_place.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error), 500

# PUT place
@api.route('/place/<int:id>', methods=['PUT'])
@jwt_required()
def update_place_by_id(id):
    data = request.get_json()
    name = data.get("name", None)
    type=data.get("type", None)
    description = data.get("description", None)
    
    print(description)


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
@jwt_required()
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


# GET image first by id_place
@api.route('/image/place/<int:id>', methods=['GET'])
def get_image_by_id(id):
    current_image = Image.query.filter_by(id_place=id).first()
    if not current_image:
        return jsonify({"error": "place not found"}), 404
    return jsonify(current_image.serialize()), 200


# GET image all by id_place
@api.route('/place/image/<int:id>', methods=['GET'])
def get_all_image_by_id(id):
    current_image = Image.query.filter_by(id_place=id).all()
    serialized_image = [image.serialize() for image in current_image]
    return jsonify(serialized_image), 200


#  create image
@api.route('/image/<int:id>', methods=['POST'])
def create_image(id):
    files=request.files
    form=request.form
    image = files.get("image", None)
    id_place=id
    
    
    try:
        img_url=bucket.upload_file(image, image.filename)
        if not img_url:
            return "Error de Servidor"
        new_image = Image(img_url= img_url, id_place=id_place)
        db.session.add(new_image)
        db.session.commit()
        return jsonify(new_image.serialize()), 201
    
    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500
    
    

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

#obtenemos el token
@api.route("/private", methods=["GET"])
@jwt_required()
def get_private_data():
    user = get_jwt_identity()
    return jsonify({"data": user}), 200

