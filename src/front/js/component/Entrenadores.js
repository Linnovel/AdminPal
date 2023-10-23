import React from "react";
import { Link } from "react-router-dom";
import Footer

from "./Footer";
const Entrenadores = () => {

  
  return (
    <>
      <div className=" p-3">
        <h2 className="text-center display-2 fw-bold text-white">
          Conoce a nuestros entrenadores {""}
          <i className="fa-solid fa-table-tennis-paddle-ball"></i>
        </h2>
        <h4 className="text-center fw-bolder text-breake text-white">
          Reclutamos a los entrenadores mas educados y preparados en tu
          disciplina favorita para brindarte un servicio de ultima generacioon y
          metodologias con vision de futuro
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 my-2 ">
              <div className="card h-100 shadow ">
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
            <div className="col-lg-4 my-2 ">
              <div className="card h-100 shadow">
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
            <div className="col-lg-4 my-2 ">
              <div className="card h-100 shadow">
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

        <button className="btn btn-primary fw-bold fs-2 d-grid col-4 mx-auto p-2 my-2 rounded ">
          Reserva tu cupo hoy
        </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Entrenadores;
