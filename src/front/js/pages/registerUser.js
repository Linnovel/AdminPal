import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const registerValue = {
	name: "",
	last_name: "",
	email: "",
	password: ""
}

export const RegisterUser = () => {
	const { store, actions } = useContext(Context)
	const [register, setRegister] = useState(registerValue)
	const navigate = useNavigate();

	//validamos que exista un token, si no existe lo enviamos a login

	useEffect(() => {
		if (store.token === "" || !store.token) {
			navigate("/login");
			return;
		}
		actions.getUserData();
	}, [store.token]);



	const handleChange = (event) => {
		setRegister({ ...register, [event.target.name]: event.target.value })
	}

	const handleSubmit = async () => {
		const result = await actions.registerUser(register);

	}

	return (
		<div>
			<div className="container ">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card p-5  border-0 shadow rounded-3 my-5">
							<h2 className="text-center">Registro de Usuario {''}<i className="fa-solid fa-user"></i></h2>
							<form>
								<div className="mb-3">
									<label htmlFor="exampleInputName" className="form-label" >Nombre</label>
									<input type="text" name="name" className="form-control" aria-describedby="emailHelp" placeholder="Escribe tu nombre aqui" onChange={handleChange} />
									<div id="emailHelp" ></div>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label" >Apellido</label>
									<input type="text" name="last_name" className="form-control" aria-describedby="emailHelp" placeholder="Escribe tu apellido aqui" onChange={handleChange} />
									<div id="emailHelp"></div>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label" >Correo Electronico</label>
									<input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu Email aqui" onChange={handleChange} />
									<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
									<input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña aqui" onChange={handleChange} />
								</div>
							</form>
							<button type="button" className="btn btn-primary" onClick={handleSubmit}>Registrate</button>
							<Link className="nav-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-center" to="/login">
								¿Ya estas registrado? dale click aqui
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

