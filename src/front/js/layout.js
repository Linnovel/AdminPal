import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import Login from "./component/Login";
import Register from "./component/Register";
import { EditUser } from "./pages/editUser";
import { ClubList } from "./pages/clubList";
import { RegisterClub } from "./pages/registerClub";
import { EditClub } from "./pages/editClub";
import { DetailClub } from "./pages/detailClub";
import RegisterPlace from "./pages/registerPlace";
import { PlaceList } from "./pages/placeList";
import { DetailPlace } from "./pages/detailPlace";
import { EditPlace } from "./pages/editPlace";
import { RegisterImage } from "./pages/registerImage";
import LandingPage from "./component/LandingPage";
import { Panel } from "./component/panel";
import injectContext from "./store/appContext";
import ReservasCanchas from "./component/ReservasCanchas";
import Nav from "./component/Navbar/Nav";
import Entrenadores from "./component/Entrenadores";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClubsSearch } from "./pages/clubsSearch";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import { ClubImage } from "./component/cardClubImage";
import { PlaceReserv } from "./component/cardPlaceReserv";
import { PlaceListReserv } from "./pages/placeListReserv";
import { ReservClient } from "./pages/reservUsersClient";
import { ReservClub } from "./pages/reservUsersClub";
import { Reserva } from "./component/reserva";
import AboutUs from "./component/AboutUs";

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
            autoClose={1000}
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
            <Route element={<ContactUs />} path="/contactUs" />
            <Route element={<AboutUs />} path="/aboutUs" />
            <Route element={<LandingPage />} path="/" />
            <Route element={<ReservasCanchas />} path="/reservascanchas" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<EditUser />} path="/userEdit" />
            <Route element={<RegisterClub />} path="/clubs" />
            <Route element={<ClubList />} path="/clublist" />
            <Route element={<DetailClub />} path="/detailClub/:id" />
            <Route element={<EditClub />} path="/editClub/:id" />
            <Route element={<RegisterPlace />} path="/registerPlace/:id_club" />
            <Route element={<PlaceList />} path="/placelist/:id_club" />
            <Route element={<DetailPlace />} path="/detailPlace/:id" />
            <Route element={<EditPlace />} path="/editplace/:id" />
            <Route element={<Panel />} path="/panel" />
            <Route element={<RegisterImage />} path="/image/:id_place" />
            <Route element={<Entrenadores />} path="/entrenadores" />
            <Route element={<ClubsSearch />} path="/clubsearch" />
            <Route element={<ClubImage />} path="/clubimage" />
            <Route element={<PlaceReserv />} path="/placeReserv/:id_place" />
            <Route element={<PlaceListReserv />} path="/placeListReserv/:id_club" />
            <Route element={<ReservClient />} path="/reservclient/" />
            <Route element={<ReservClub />} path="/reservclub/:id" />
            <Route element={<Reserva />} path="/reserva" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );

};

export default injectContext(Layout);
