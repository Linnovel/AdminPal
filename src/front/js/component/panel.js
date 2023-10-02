import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import logopadel from "../../img/logopadel.png";





export const Panel = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const prueba = false;



    const goToregisterClub = () => {
        navigate("/clubs");
    }
    const SubmitListclubs = () => {
        navigate("/clubList");
    }
    const SubmitUserData = () => {
        navigate("/userEdit");
    }
    const SubmitReserv = () => {
        navigate("/reservclient");
    }

    const Logout = () => {
        actions.logout();
        navigate("/");
    }


    return (
        <nav className="navbar navbar-expand-lg bg-black border-bottom border-body " data-bs-theme="dark">
            <span className="navbar-brand mb-0">
                <Link to="/">
                    <img
                        src={logopadel}
                        className="img-fluid"
                        width="125"
                        height="125px"
                    />
                </Link>
            </span>
            <div className="container-fluid">
                <p className="text-light fw-light mb-0 fs-1">Bienvenido {store.userData.name}</p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menuLateral"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <section
                    className="offcanvas offcanvas-start  bg-black"
                    id="menuLateral"
                    tabIndex="-1"
                >
                    <div className="offcanvas-header" data-bs-theme="dark">
                        <h5 className="offcanvas-title text-info">CLUBS</h5>
                        <button
                            className="btn-close "
                            type="button"
                            aria-label="Close"
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>

                    <div
                        className="d-flex justify-content-end align-items-center gap-2"
                    >
                        <ul className="navbar-nav fs-5 justify-content-evenly">
                            {store.userData.is_club ? (
                                <li className="nav-item p-3 py-md-1">
                                    <button className="btn offcanvas-title text-info fw-bold  fs-4 " onClick={goToregisterClub}>Registra un Club</button>
                                </li>
                            ) : ""}
                            {store.userData.is_club ? (
                                <li className="nav-item p-3 py-md-1">
                                    <button className="btn offcanvas-title text-info fw-bold  fs-4" onClick={SubmitListclubs}>Clubs Registrados </button>
                                </li>
                            ) : ""}
                            <li className="nav-item p-3 py-md-1">
                                <button className="btn offcanvas-title text-info fw-bold  fs-4" onClick={SubmitUserData}>Mis Datos </button>
                            </li>
                            <li className="nav-item p-3 py-md-1">
                                <button className="btn offcanvas-title text-info fw-bold  fs-4" onClick={SubmitReserv}>Mis Reservas </button>
                            </li>
                            <li className="nav-item p-3 py-md-1">
                                <button className="btn offcanvas-title text-info fw-bold  fs-4" onClick={Logout}>Cerrar Sesion <i className="fa-solid fa-right-from-bracket "></i></button>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </nav>

    );
};


