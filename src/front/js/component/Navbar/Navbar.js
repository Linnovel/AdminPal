import React, { useContext } from "react";
import logopadel from "../../../img/logopadel.png";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav
        className="navbar shadow shadow p-3  "
        data-bs-theme="dark"
      >
        <div className="container">
          <span className="navbar-brand mb-0">
            <img
              src={logopadel}
              className="img-fluid"
              width="125"
              height="125px"
            />
          </span>
          <div className="ml-auto ">
            <div className="d-flex align-items-center gap-2 ">
              <Link to="/entrenadores">
                <button className="btn offcanvas-title text-info fw-bold  fs-5">
                ¿Necesitas un entrenador?
                </button>
              </Link>
              <Link to="/register">
                <button className="btn offcanvas-title text-info fw-bold  fs-5">
                  Inicia Sesion / Registrate
                </button>
              </Link>
              <Link to="/ContactUs">
                <button className="btn offcanvas-title text-info fw-bold  fs-5">
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
