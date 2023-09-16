import React from "react";
import logopadel from "../../img/logopadel.png";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const ReservasCanchas = () => {
  return (
    <>
          <div className="back-landing2 ">
        <nav className="navbar border-bottom border-body bg-black " data-bs-theme="dark">
          <div className="container">
            <span className="navbar-brand mb-0">
              <img
                src={logopadel}
                className="img-fluid"
                width="100"
                height="100px"
              />
            </span>
            
            <div className="ml-auto ">
              <div className="d-flex align-items-center gap-2 ">
                <Link to="/">
                  <button
                    type="submit"
                    className="btn btn-success mb-2 navbtn fw-bolder"
                  >
                   Home
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="submit"
                    className="btn btn-success mb-2 navbtn fw-bolder"
                  >
                   Tus Reservaciones
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="submit"
                    className="btn btn-success mb-2 navbtn fw-bolder"
                  >
                    Nombre de usuario<i className="fa-regular fa-user"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container ">
          <div className="row">
            <h3 className="display-4 text-white fw-bold">
              Canchas Disponibles
            </h3>
            <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                <img
                  src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                  className="img-fluid"
                  width="1000px"
                  height="1000px"
                />
                <div className="card-body ">
                  <div className="card-text text-center mb-2">
                  Cancha nombre y direccion.
                  </div>
                  <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success">
                    Reserva este campo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5 ">
              <div className="card shadow p-3 mb-5  rounded ">
                <img
                  src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                  className="img-fluid"
                  width="1000px"
                  height="1000px"
                />
                <div className="card-body ">
                  <div className="card-text text-center mb-2">
                  Cancha nombre y direccion.
                  </div>
                  <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success">
                    Reserva este campo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                <img
                  src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                  className="img-fluid"
                  width="1000px"
                  height="1000px"
                />
                <div className="card-body ">
                  <div className="card-text text-center mb-2">
                  Cancha nombre y direccion..
                  </div>
                  <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success">
                    Reserva este campo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-landing3 ">
      <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                <img
                  src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                  className="img-fluid"
                  width="1000px"
                  height="1000px"
                />
                <div className="card-body ">
                  <div className="card-text text-center mb-2">
                  Cancha nombre y direccion.
                  </div>
                  <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success ">
                    Reserva este campo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5 ">
              <div className="card shadow p-3 mb-5  rounded ">
                <img
                  src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                  className="img-fluid"
                  width="1000px"
                  height="1000px"
                />
                <div className="card-body ">
                  <div className="card-text text-center mb-2">
                  Cancha nombre y direccion.
                  </div>
                  <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success">
                    Reserva este campo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                <img
                  src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                  className="img-fluid"
                  width="1000px"
                  height="1000px"
                />
                <div className="card-body ">
                  <div className="card-text text-center mb-2">
                  Cancha nombre y direccion..
                  </div>
                  <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success">
                    Reserva este campo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <footer className="text-center text-white bg-black border-top border-body ">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center text-white p-3">© 2023 Copyright:</div>
      </footer>
    </>
  );
};

export default ReservasCanchas;
