import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import logopadel from "../../img/logopadel.png";

const loginUser = {
  email: "",
  password: "",
};

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [login, setLogin] = useState(loginUser);

  const navigate = useNavigate();

  const hanndleEvent = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const result = await actions.loginUser(setLogin);
  };

  return (
    <>
      <div className="back-landing3">
        <nav
          className="navbar border-bottom border-body bg-black "
          data-bs-theme="dark"
        >
          <div className="container">
            <span className="navbar-brand mb-0">
			<Link to="/home">
              <img
                src={logopadel}
                className="img-fluid"
                width="100"
                height="100px"
				/>
				</Link>
            </span>
          </div>
        </nav>
        <div className="container ">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
				<div className="text-center fw-bold display-2 text-white">
					Bienvenido
				</div>
              <div className="card p-5  border-0 shadow rounded-3 my-5 ">
                <h2 className="text-center">Accede a tu usuario</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Correo Electronico {""}
                      <i className="fa-solid fa-at"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Escribe tu Email aqui"
                      onChange={hanndleEvent}
                    />
                    <div id="emailHelp" className="form-text">
                      Nunca compartiremos tu informacion.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Contraseña {""}
                      <i className="fa-solid fa-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Escribe tu contraseña aqui"
                      onChange={hanndleEvent}
                    />
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Accede
                </button>
                <Link
                  className="nav-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-center"
                  to="/register"
                >
                  ¿Aun no estas registrado? Registrate aqui
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-white bg-black border-top border-body ">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center text-white p-3">© 2023 Copyright:</div>
      </footer>
    </>
  );
};

export default Login;
