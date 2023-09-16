import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import padel1 from "../../img/padel1.jpg";
import Login from "../component/Login";
import Register from "../component/Register";
import "../../styles/home.css";
import LandingPage from "../component/LandingPage";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<LandingPage/>
		</>
	);
};
