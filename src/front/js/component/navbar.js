import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				
					<span className="navbar-brand mb-0 h1">logo</span>
			
				<div className="ml-auto">
					<Link to="/register">
						<button className="btn btn-primary">Registrate</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
