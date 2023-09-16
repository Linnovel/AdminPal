import React from "react";
import logopadel from "../../img/logopadel.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";



export const LandingPage = () => {
  return (
    <>
      <div className="back-landing ">
      <nav className="navbar sticky-lg-top border-bottom border-body bg-black " data-bs-theme="dark">
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
					<Link to="/register">
						<button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Necesitas un entrenador</button>
					</Link>
					<Link to="/register">
						<button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Inicia Sesion / Registrate</button>
					</Link>
					<Link to="/register">
						<button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Eres un club</button>
					</Link>
					</div>
				</div>
          </div>
        </nav>
        <div className="container">
            <h1 className="textslide display-3 text-white fw-bold">
              Busca el mejor lugar donde jugar con tus amigos
            </h1>
            <h2 className="text-white fw-bolder">Utiliza el buscador</h2>
          <div className="row">
            <div className="">
              <div className="card p-5 border-0  rounded-3 my-5 d-flex flex-row justify-content-center align-items-center gap-4">
                <div className="form-floating mb-2 col-12 col-lg-4">
                  <input
                    type="text"
                    name="ciudad"
                    className="form-control w-100"
                    placeholder="Ciudad"
                    id="floatingCity"
                  />
                  <label htmlFor="flotaintInput" >Direccion, Ciudad, Club</label>
                </div>
                <div className="form-floating mb-2 col-12 col-lg-4 ">
                  <input
                    type="text"
                    name="ciudad"
                    className="form-control w-100"
                    placeholder="Elige tu deporte favorito"
                    id="floatingCity"
                  />
                  <label htmlFor="flotaintInput"  
                    aria-label="Default select example"  >Horario</label>
                    
                </div>
                {/* <div className="form-floating ">
                  <select
                    className="form-select mb-2"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Elige un deporte</option>
                    <option value="1">Padel</option>
                    <option value="2">Futbol</option>
                    <option value="3">Bolas Criollas</option>
                    <option value="4">Futbol Sala</option>
                    <option value="5">Spinning</option>
                    <option value="6">Crossfit</option>
                    <option value="7">Tennis</option>
                    <option value="8">Squash</option>
                  </select>
                </div>  */}
                <button type="submit" className="boton-main  btn btn-success btn-lg mb-2">Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-bg">
        <div className="container ">
          <div className="row">
            <h3 className="display-4 text-white fw-bold">
              Las instalaciones mas buscadas
            </h3>
            <h4 className="text-white fw-bolder">Reserva ya!</h4>
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
                    Empieza ya a recibir estos beneficios.
                    <Link to="/register">
                      <div className="fw-bold">Registrate</div>
                    </Link>
                  </div>
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

export default LandingPage;
