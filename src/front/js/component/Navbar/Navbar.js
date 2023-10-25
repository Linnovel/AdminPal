import React, { useContext } from "react";
import logopadel from "../../../img/logopadel.png";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav
        className="navbar shadow"
        data-bs-theme="dark"
      >
        <div className="container">
          <span className="navbar-brand  ">
            <img
              src={logopadel}
              className="img-fluid"
              width="125px"
              height="125px"
            />
          </span>
          
          <div className="ml-auto ">
            <div className="d-flex  gap-1 ">
              <Link to="/entrenadores">
                <button className="btn offcanvas-title text-info fw-bold  fs-5 gap-2">
                ¿Necesitas un entrenador?
                </button>
              </Link>
              <Link to="/register">
                <button className="btn offcanvas-title text-info fw-bold  fs-5 gap-2">
                  Inicia Sesion / Registrate
                </button>
              </Link>
              <Link to="/ContactUs">
                <button className="btn offcanvas-title text-info fw-bold  fs-5 gap-2">
                ¿Eres un club?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
