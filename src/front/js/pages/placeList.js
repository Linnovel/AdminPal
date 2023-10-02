import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"

export const PlaceList = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  const id_club = parseInt(params.id_club);

  const handleSubmit = (id) => {
    navigate(`/detailPlace/${id}`);
  };
  const registerPlace = (id) => {
    navigate(`/registerPlace/${id}`);
  };

  const fetchPlace = async () => {
    const response = await actions.getPlaces(id_club);
    if (response === 0) {
      registerPlace();
    }
  };

  //validamos que exista un token, si no existe lo enviamos a login
  useEffect(() => {
    if (store.token === "" || !store.token) {
      toast.error("No autenticado");
      navigate("/login");
      return;
    }

    fetchPlace();
    actions.getUserData();
  }, [store.token]);

  return (
    <>
      <div className="list-c">
        <div className="container">
          <div className="row d-flex justify-content-center">
          <div className="card col-sm-12 col-md-7 col-lg-5 mx-auto form my-2 mb-2 p-2">
            <div className="card-body">
              <h2 className="card-title fw-bold text-center">Registra tus canchas</h2>
            <ul  className="list-group col-12  mt-5 mb-2 p-2">
              <li className="list-group-item d-flex justify-content-between  fw-bold">
                {store.placeslist.length} Espacios registrados
              </li>
              {
                store.placeslist.map((element, index) => {
                  return (
                    <li
                      className="list-group-item list-group-item-action d-flex justify-content-between form"
                      key={element.id}
                      onClick={() => handleSubmit(element.id)}
                    >
                      {element.name} {element.description} {element.type}
                    </li>
                  );
                }) //fin del map
              }
            </ul>
            </div>
            </div>
          </div>
            <button
              className="btn btn-primary mb-2 my-2 p-2 d-grid mx-auto "
              onClick={() => registerPlace(id_club)}
            >
              Registra un Lugar de Club
            </button>
        </div>
      </div>
      
    </>
  );
};
