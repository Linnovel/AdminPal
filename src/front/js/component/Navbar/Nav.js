import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarRegistros from "./NavbarRegistros";
import { Panel } from "../panel";

const Nav = () => {
  const location = useLocation();
  const navbarPath = ["/"];

  return (
    <>
      {navbarPath.includes(location.pathname) ? (
        <Navbar />
       ) :  (
        <Panel />
      )
      }
    </>
  );
};

export default Nav;
