import React from "react";
import padelpal from "../../../img/padelpal.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (<>
    <nav className="navbar sticky-lg-top border-bottom border-body bg-black " data-bs-theme="dark">
      <div className="container">
        <span className="navbar-brand mb-0">
          <img
            src={padelpal}
            className="img-fluid"
            width="125"
            height="125px"
          />
        </span>
        <div className="ml-auto ">
          <div className="d-flex align-items-center gap-2 ">
            <Link to="/entrenadores">
              <button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Necesitas un entrenador</button>
            </Link>
            <Link to="/register">
              <button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Inicia Sesion / Registrate</button>
            </Link>
            <Link to="/clubs">
              <button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Eres un club</button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  </>)
}

export default Navbar;