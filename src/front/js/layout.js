import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import Login from "./component/Login";
import Register from "./component/Register";
import { ClubList } from "./pages/clubList";
import { RegisterClub } from "./pages/registerClub";
import { RegisterUser } from "./pages/registerUser";
import { EditClub } from "./pages/editClub";
import { DetailClub } from "./pages/detailClub";
import RegisterPlace from "./pages/registerPlace";
import LandingPage from "./component/LandingPage";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Footer } from "./component/Footer";
import ReservasCanchas from "./component/ReservasCanchas";
import Navbar from "./component/Navbar/Navbar";
import NavbarRegistros from "./component/Navbar/NavbarRegistros";
import Nav from "./component/Navbar/Nav";
import Entrenadores from "./component/Entrenadores";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <>
            <Nav />
          </>
          <Routes>
            <Route element={<LandingPage />} path="/" />
            <Route element={<ReservasCanchas />} path="/reservascanchas" />
            <Route element={<Login />} path="/login" />
            <Route element={<Entrenadores />} path="/entrenadores" />
            <Route element={<Register />} path="/register" />
            <Route element={<RegisterUser />} path="/registerUser" />
            <Route element={<RegisterClub />} path="/clubs" />
            <Route element={<ClubList />} path="/clublist" />
            <Route element={<DetailClub />} path="/detailClub/:id" />
            <Route element={<EditClub />} path="/editClub/:id" />
            <Route element={<RegisterPlace />} path="/registerPlace/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
