import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import logopadel from "../../img/logopadel.png";





export const Panel = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();



    const goToregisterClub = () => {
        navigate("/clubs");
    }
    const SubmitListclubs = () => {
        navigate("/clubList");
    }
    const SubmitUserData = () => {
        navigate("/userEdit");
    }

    const Logout = () => {
        actions.logout();
        navigate("/");
    }
    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }
        actions.getUserData();
    }, [store.token]);

    return (
        <nav className="navbar navbar-expand-lg bg-black border-bottom border-body " data-bs-theme="dark">
            <span className="d-flex justify-content-start">
                <img
                    src={logopadel}
                    className="img-fluid"
                    width="70"
                    height="70px"
                />
                <h6 className="text-light">{store.userData.email}</h6>
            </span>
            <div className="container-fluid">
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
                    tabindex="-1"
                >
                    <div className="offcanvas-header" data-bs-theme="dark">
                        <h5 className="offcanvas-title text-info">CLUBS</h5>
                        <button
                            className="btn-close"
                            type="button"
                            aria-label="Close"
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>

                    <div
                        className="offcanvas-body d-flex flex-column justify-content-between px-0"
                    >
                        <ul className="navbar-nav fs-5 justify-content-evenly">
                            <li className="nav-item p-3 py-md-1">
                                <button className="nav-link offcanvas-title text-info fw-bold" onClick={goToregisterClub}>Registra un Club</button>
                            </li>
                            <li className="nav-item p-3 py-md-1">
                                <button className="nav-link offcanvas-title text-info fw-bold" onClick={SubmitListclubs}>Clubs Registrados </button>
                            </li>
                            <li className="nav-item p-3 py-md-1">
                                <button className="nav-link offcanvas-title text-info fw-bold" onClick={SubmitUserData}>Mis Datos </button>
                            </li>
                            <li className="nav-item p-3 py-md-1">
                                <button className="nav-link offcanvas-title text-info fw-bold" onClick={Logout}>Cerrar Sesion </button>
                            </li>
                        </ul>
                        <div className="d-lg-none align-self-center py-3">
                            <a ><i className="bi bi-twitter px-2 text-info fs-2"></i></a>
                            <a ><i className="bi bi-facebook px-2 text-info fs-2"></i></a>
                            <a ><i className="bi bi-github px-2 text-info fs-2"></i></a>
                            <a ><i className="bi bi-whatsapp px-2 text-info fs-2"></i></a>
                        </div>
                    </div>
                </section>
            </div>
        </nav>

    );
};


