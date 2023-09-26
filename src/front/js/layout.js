import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import Login from "./component/Login";
import Register from "./component/Register";
import { EditUser } from "./pages/editUser";
import { ClubList } from "./pages/clubList";
import { RegisterClub } from "./pages/registerClub";
import { RegisterUser } from "./pages/registerUser";
import { EditClub } from "./pages/editClub";
import { DetailClub } from "./pages/detailClub";
import RegisterPlace from "./pages/registerPlace";
import { PlaceList } from "./pages/placeList";
import { DetailPlace } from "./pages/detailPlace";
import { EditPlace } from "./pages/editPlace";
import { RegisterImage } from "./pages/registerImage";
import LandingPage from "./component/LandingPage";
import { Panel } from "./component/panel";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ReservasCanchas from "./component/ReservasCanchas";




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>

                    <Routes>
                        <Route element={<LandingPage />} path="/" />
                        <Route element={<ReservasCanchas />} path="/reservascanchas" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<RegisterUser />} path="/registerUser" />
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
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
