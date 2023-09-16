import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const loginUser = {
	"email": '',
	"password": ''
}

export const Login = () => {
	const { store, actions } = useContext(Context)
	const [login, setLogin] = useState(loginUser)

	const navigate = useNavigate();


	const hanndleEvent = (event) => {

		setLogin({ ...login, [event.target.name]: event.target.value })
	}

	const handleSubmit = async () => {

		const result = await actions.login(login);
		navigate("/clublist");
		return;

	}


	return (
		<div>
			<div className="container ">

				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card p-5  border-0 shadow rounded-3 my-5 ">
							<h2 className="text-center">Accede a tu usuario</h2>
							<form>
								<div className="mb-3">

									<label htmlFor="exampleInputEmail1" className="form-label" >Correo Electronico {''}<i className="fa-solid fa-at"></i></label>
									<input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu Email aqui" onChange={hanndleEvent} />
									<div id="emailHelp" className="form-text">Nunca compartiremos tu informacion.</div>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">Contraseña {''}<i className="fa-solid fa-lock"></i></label>
									<input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña aqui" onChange={hanndleEvent} />
								</div>
							</form>
							<button type="button" className="btn btn-primary" onClick={handleSubmit} >Accede</button>
							<Link className="nav-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-center" to="/register" >
								¿Aun no estas registrado? Registrate aqui
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

