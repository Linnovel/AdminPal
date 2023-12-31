import React from "react";
import logopadel from "../../img/logopadel.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar  bg-black">
			
			<div className="container">
					<span className="navbar-brand mb-0">
						<img src={logopadel } className="img-fluid" width="100" height="100px"/> 
					</span>
					
				<div className="ml-auto ">
					
					<div className="d-flex align-items-center gap-2 ">
					<Link to="/register">
						<button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Necesitas un entrenador</button>
					</Link>
					<Link to="/register">
						<button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Inicia Sesion / Registrate</button>
					</Link>
					<Link to="/register">
						<button type="submit" className="btn btn-success mb-2 navbtn fw-bolder">Eres un club</button>
					</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
