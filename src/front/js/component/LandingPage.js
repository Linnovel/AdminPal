import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { PlaceReserv } from "../component/cardPlaceReserv";

const initialValue = {
  ciudad: ""
}

export const LandingPage = () => {

  const { store, actions } = useContext(Context);
  const [ciudad, setCiudad] = useState(initialValue);
  const navigate = useNavigate();


  const handleChange = (event) => {
    setCiudad({ ...ciudad, [event.target.name]: event.target.value });
  };

  const submit = async () => {
    const clubs = await actions.getclubsCity(ciudad);
    navigate("/clubsearch");

  }



  useEffect(() => {
    actions.getUserData();
    actions.getPlaceAll();
  }, [store.token]);

  return (
    <>
      <div className="back-landing ">
        <div className="container">
          <h1 className="textslide display-3 text-white fw-bold">
            Busca el mejor lugar donde jugar con tus amigos
          </h1>
          <h2 className="text-white fw-semibold">Busca en tu ciudad para encontrar los mejores lugares</h2>
          <div className="row">
            <div className="">
              <div className="card p-5 border-0  rounded-3 my-5 d-flex flex-row justify-content-center align-items-center gap-4 form">
                <div className=" mb-3 col-md-12 col-lg-4">
                  <input
                    type="text"
                    name="ciudad"
                    className="form-control "
                    placeholder="Ciudad"
                    id="floatingCity"
                    onChange={handleChange}

                  />
                </div>
                <button type="submit" onClick={submit} className="boton-main  btn btn-success btn-lg mb-3">Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="container ">
          <div className="row">
            <h3 className="display-4 text-white fw-bold">
              Las instalaciones mas buscadas
            </h3>
            <h4 className="text-white fw-bolder">Reserva ya!</h4>

            <div className="d-flex overflow-x-scroll  ">
              {
                store.placeslist.map((element, index) => {
                  return (

                    <PlaceReserv name={element.name} type={element.type}
                      description={element.description}
                      id_place={element.id} index={index} />
                  )
                }) //fin del map
              }
            </div>
          </div>
        </div>
      </div>


      <div className="final-bg">
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 mx-auto">
              <div className="bg-glass1 card p-5  border-0 shadow rounded-3 my-5 opacity-75 ">
                <div className="card-body">
                  <div className="card-text text-center fw-bold display-4 text-white">
                    Queremos que experimentes al maximo tu mejor momento del dia
                  </div>
                  <div className="card-text text-center fw-light display-5 text-white">
                    Empieza a recibir estos beneficios.
                    <Link to="/register">
                      <div className="fw-bold">Registrate</div>
                    </Link>
                    <div className="container p-2">
                      <div className="row">
                        <div className="col-4">
                          Padel <i className="fa-solid fa-table-tennis-paddle-ball"></i>
                        </div>
                        <div className="col-4">
                          Futbol <i className="fa-solid fa-futbol"></i>
                        </div>
                        <div className="col-4">
                          Basketball <i className="fa-solid fa-basketball"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default LandingPage;
