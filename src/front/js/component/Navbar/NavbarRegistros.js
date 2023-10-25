import React, { useContext } from "react";
import logopadel from "../../../img/logopadel.png";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


const NavbarRegistros = () => {
  const {store, actions} = useContext(Context)
  

  return (
    <>
    <nav className="navbar-registros navbar shadow " data-bs-theme="dark">
      <div className="container">
        <span className="navbar-brand ">
          <Link to="/">
          <img
            src={logopadel}
            className="img-fluid"
            width="125px"
            height="125px"
            />
            </Link>
        </span>
        <div className="ml-auto ">
          <div className="d-flex align-items-center gap-2 ">
          <Link to="/AboutUs">
                <button className="btn offcanvas-title text-info fw-bold  fs-5">
                  Quienes somos
                </button>
              </Link>
            <Link to="/ContactUs" >
            <button  className="btn offcanvas-title text-info fw-bold p-3 fs-5">Contactanos</button>
        </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavbarRegistros;
