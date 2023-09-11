import React from "react";
import logopadel from "../../img/logopadel.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black">
			
			<div className="container">
					<span className="navbar-brand mb-0">
						<img src={logopadel } className="img-fluid" width="100" height="100px"/> 
					</span>
					
				<div className="ml-auto">
					
					<div className="d-flex align-items-center gap-2">
					<Link to="/register">
						<p className="link-underline-primary mb-2">Necesitas un entrenador</p>
					</Link>
					<Link to="/register">
						<p className="link-underline-primary mb-2">Inicia Sesion / Registrate</p>
					</Link>
					<Link to="/register">
						<button className="btn btn-warning mb-2">Eres un club</button>
					</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
