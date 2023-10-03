import React from "react";
import { Link } from "react-router-dom";

const Entrenadores = () => {

  
  return (
    <>
      <div className="landing-entrenadores">
        <h2 className="text-center text-white display-2 fw-bold ">
          Conoce a nuestros entrenadores {""}
          <i className="fa-solid fa-table-tennis-paddle-ball"></i>
        </h2>
        <h4 className="text-center text-white fw-bolder text-breake">
          Reclutamos a los entrenadores mas educados y preparados en tu
          disciplina favorita para brindarte un servicio de ultima generacioon y
          metodologias con vision de futuro
        </h4>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://i.insider.com/6114f9063dd01000199d47ef?width=1000&format=jpeg&auto=webp"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Octavio Lara</h5>
                  <p className="card-text text-center">
                    Entrenador principal y jefe de programacion
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/8/10/wayekhjulogbkd3ctt3p/alejandro-galan-padel-spain"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Jose Morrones </h5>
                  <p className="card-text text-center">Asistente principal</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/woman-holding-padel-racket.jpg?quality=82&strip=1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Ana Plata</h5>
                  <p className="card-text text-center">
                    Practicante de deportes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/ContactUs" >

        <button className="btn btn-warning fw-bold fs-2 d-grid gap-2 col-4 mx-auto p-3 my-2 mb-2 ">
          Reserva tu cupo hoy
        </button>
        </Link>
      </div>
    </>
  );
};

export default Entrenadores;
