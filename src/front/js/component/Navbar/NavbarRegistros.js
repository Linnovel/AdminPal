import React from "react";
import padelpal from "../../../img/padelpal.png";



const NavbarRegistros = () => {
  return (
    <>
      <nav
        className="navbar border-bottom border-body bg-black img-responsive"
        data-bs-theme="dark"
      >
        <div className="container">
          <span className="navbar-brand">
            <img src={padelpal} className="logopadel img-fluid " />
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavbarRegistros;
