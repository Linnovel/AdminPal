import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarRegistros from "./NavbarRegistros";

const Nav = () => {
  const location = useLocation();
  const navbarPath = ["/"];

  return (
    <>
      {navbarPath.includes(location.pathname) ? (
        <Navbar />
      ) : (
        <NavbarRegistros />
      )}
    </>
  );
};

export default Nav;
