import React from "react";
import fondo1 from "../../img/fondo1.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const LandingPage = () => {


    return <>
        <div className="back-landing">
            <div className="container">
                <div className="row">
                    <h1 className="display-4 text-white fw-bold">Encuentra el mejor lugar donde jugar con tus amigos</h1>
                    <h2 className="text-white fw-light">Busca tu cancha favorita</h2>
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card p-5 border-0 shadow rounded-3 my-5">
                            <div className="form-floating mb-3">
                                <input type="text" name="ciudad" className="form-control" placeholder="Ciudad" id="floatingCity" />
                                <label htmlFor="flotaintInput" >Direccion, Ciudad, Club</label></div>
                            <select className="form-select mb-2" aria-label="Default select example" >
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
                            <button className="btn btn-primary" >Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="second-bg">
            <div className="container ">
                <div className="row">
                    <h3 className="display-4 text-white fw-bold">Las instalaciones mas buscadas</h3>
                    <h4 className="text-white fw-light">Reserva ya!</h4>
                    <div className="col-sm-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                            <img src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg" className="img-fluid" width="1000px" height="1000px" />
                            <div className="card-body ">
                                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-warning m-3">Reserva este campo</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                            <img src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg" className="img-fluid" width="1000px" height="1000px" />
                            <div className="card-body ">
                                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-warning m-3">Reserva este campo</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                            <img src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg" className="img-fluid" width="1000px" height="1000px" />
                            <div className="card-body ">
                                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-warning m-3">Reserva este campo</button>
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
                        <div className="card p-5  border-0 shadow rounded-3 my-5 opacity-50">
                            <div className="card-body">
                                <p className="card-text text-center fw-bold display-4">Queremos que experimentes al maximo tu mejor momento del dia</p>
                                <p className="card-text text-center fw-light display-5">Empieza ya a recibir estos beneficios.
                                    <Link to="/register">
                                        <p className="fw-bold">Registrate</p>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="text-center text-white" >
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
            </div>
            <div className="text-center text-dark p-3" >
                © 2023 Copyright:
            </div>
        </footer>
    </>

}

export default LandingPage;

