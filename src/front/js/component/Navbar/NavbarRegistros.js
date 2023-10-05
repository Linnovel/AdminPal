import React, { useContext } from "react";
import padelpal from "../../../img/padelpal.png";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


const NavbarRegistros = () => {
  const {store, actions} = useContext(Context)
  

  return (
    <>
    <nav className="navbar  border-bottom border-body bg-black " data-bs-theme="dark">
      <div className="container">
        <span className="navbar-brand mb-0">
          <Link to="/">
          <img
            src={padelpal}
            className="img-fluid"
            width="125"
            height="125px"
            />
            </Link>
        </span>
        <div className="ml-auto ">
          <div className="d-flex align-items-center gap-2 ">
            <Link to="/ContactUs" >
            <button  className="btn offcanvas-title text-info fw-bold  fs-4">Contactanos</button>
          
        </Link>
            

          </div>
        </div>
      </div>
    </nav>
      
    </>
  );
};

export default NavbarRegistros;
