import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
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
