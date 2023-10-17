import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import Footer from "./Footer";

const loginUser = {
  email: "",
  password: "",
};

export const Login = () => {

  const { store, actions } = useContext(Context)
  const [login, setLogin] = useState(loginUser)

  const navigate = useNavigate();

  const myStyle={
    backgroundImage: 
"url('https://camontemar.es/wp-content/uploads/2020/10/Escuela_PADEL_Montemar_TM.jpg)",
    backgroundSize: 'cover',
};


  const hanndleEvent = (event) => {

    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  const handleSubmit = async () => {

    if (login.email == "") {
      toast.error("Debe introdducir su Email")
      return
    }
    if (login.password == "") {
      toast.error("Debe introducir su Contraseña")
      return
    }
    const result = await actions.login(login);
    if (result) {
      navigate("/");
      toast.success("Bienvenido!")
      return;
    }
    toast.error("Credenciales invalidas!")
  }
  return (
    <div style={myStyle}>
      <div className="container-fluid "  >
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto form-box">
            <div className="card p-5  border-0 shadow rounded-3 my-5 bg-glass1 ">
              <h2 className="text-center text-white fw-semibold">Accede a tu Cuenta</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label text-white" >Correo Electronico {''}<i className="fa-solid fa-at"></i></label>
                  <input type="email" name="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu Email aqui" onChange={hanndleEvent} />
                  <h6 className="my-2 text-white">Nunca compartiremos tu informacion.</h6>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label text-white">Contraseña {''}<i className="fa-solid fa-lock"></i></label>
                  <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña aqui" onChange={hanndleEvent} />
                </div>
              </form>
              <button type="button" className="btn btn-primary " onClick={handleSubmit} >Accede</button>
              <Link className="nav-link link-primary link-offset-2  text-white link-underline-opacity-25 link-underline-opacity-100-hover text-center" to="/register" >
                ¿Aun no estas registrado? Registrate aqui
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>


  );

};

export default Login;
