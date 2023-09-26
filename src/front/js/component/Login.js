import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import padelpal from "../../img/padelpal.png";
import { toast } from "react-toastify"


const loginUser = {
  email: "",
  password: "",
};

export const Login = () => {

  const { store, actions } = useContext(Context)
  const [login, setLogin] = useState(loginUser)

  const navigate = useNavigate();


  const hanndleEvent = (event) => {

    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  const handleSubmit = async () => {
    const result = await actions.login(login);
    if (result) {
      navigate("/clublist");
      toast.success("Bienvenido!")
      return;
    }
    toast.error("Credenciales invalidas!")
  }
  return (
    <div>
      <div className="container-fluid back-landing3"  >
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto form-box">
            <div className="card p-5  border-0 shadow rounded-3 my-5 form">
              <h2 className="text-center fw-semibold">Accede a tu Cuenta</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" >Correo Electronico {''}<i className="fa-solid fa-at"></i></label>
                  <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu Email aqui" onChange={hanndleEvent} />
                  <h6>Nunca compartiremos tu informacion.</h6>
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
    </div>


  );

};

export default Login;
