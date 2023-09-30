import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarRegistros from "./NavbarRegistros";
import { Panel } from "../panel";
import { Context } from "../../store/appContext";



const Nav = () => {
  
  const location = useLocation();
  const navbarPath = ["/"];
  const registerPath = ["/login", "/register", "/entrenadores", "/ContactUs"]
  const { store } = useContext(Context)

  return (
    <>
      {navbarPath.includes(location.pathname) ? (
        store.token != "" ?
          <Panel />
          :
          <Navbar />
      ) : registerPath.includes(location.pathname) ? (
        <NavbarRegistros />
      ) :
        <Panel />
      }
    </>
  );
};

export default Nav;
