import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { PlaceReserv } from "../component/cardPlaceReserv";
import mobiledesign from "../../img/mobiledesign.png";
import Footer from "./Footer";
import logopadel from "../../img/logopadel.png";

const initialValue = {
  ciudad: "",
};

export const LandingPage = () => {
  const { store, actions } = useContext(Context);
  const [ciudad, setCiudad] = useState(initialValue);
  const navigate = useNavigate();

  const myStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1103829.jpg&fm=jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
  };

  const handleChange = (event) => {
    setCiudad({ ...ciudad, [event.target.name]: event.target.value });
  };

  const submit = async () => {
    const clubs = await actions.getclubsCity(ciudad);
    navigate("/clubsearch");
  };

  useEffect(() => {
    actions.getUserData();
    actions.getPlaceAll();
  }, [store.token]);

  return (
    <>
      <div>
        <div className="container">
          <h1 className=" display-3 text-white fw-bold">
            La forma mas rapida para hacer tus reservaciones
          </h1>
          <h2 className=" fw-semibold text-white">
            Busca en tu ciudad para encontrar los mejores lugares
          </h2>
          <div className="row">
            <div className="">
              <div className="card p-5 border-0 col-12 rounded-3 my-5 d-flex flex-row justify-content-center align-items-center gap-4 bg-glass1">
                <div className=" mb-3 col-md-12 col-lg-4">
                  <input
                    type="text"
                    name="ciudad"
                    className="form-control shadow-sm rounded "
                    placeholder="Ciudad"
                    id="floatingCity"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  onClick={submit}
                  className="boton-main  btn btn-success btn-md mb-3"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <h3 className="display-4 text-white fw-bold">
              Las instalaciones mas buscadas del país
            </h3>
            <h4 className=" fw-bolder text-white fs-3">Reserva ya!</h4>

            <div className="d-flex overflow-x-scroll  ">
              {
                store.placeslist.map((element, index) => {
                  return (
                    <PlaceReserv
                      name={element.name}
                      type={element.type}
                      description={element.description}
                      id_place={element.id}
                      index={index}
                      key={index}
                    />
                  );
                }) //fin del map
              }
            </div>
          </div>

          {/* Cartas */}

          <div className="container p-2 my-2">
            <div className="row">
              <div className="col">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">
                      <i className="fa-solid fa-magnifying-glass"></i> {""}
                      Encuentra
                    </h5>
                    <p className="card-text text-center fw-semibold">
                      Nuestro servicio es hacer que encuentres la mejor opción
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder ">
                      <i className="fa-solid fa-calendar"></i>
                      {""} Reserva{" "}
                    </h5>
                    <p className="card-text text-center fw-semibold">
                      Haz tu reservación en tu lugar favorito
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">
                      {" "}
                      <i className="fa-solid fa-table-tennis-paddle-ball"></i>
                      {""} Disfruta
                    </h5>
                    <p className="card-text text-center fw-semibold ">
                      Juega tu deporte favorito y disfruta tu día
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diseno Mobile */}

          <div className="row">
            <div className="col-sm-12 mx-auto">
              <div className="bg-glass1 card p-5  border-0 shadow rounded-3 my-5  ">
                <div className="card-body">
                  <div className="card-text text-center fw-bold display-4 text-white ">
                    Queremos que experimentes al maximo tu mejor momento del día
                  </div>
                  <div className="card-text text-center fw-light display-5 text-white">
                    Empieza a recibir estos beneficios.
                    <Link to="/register">
                      <div className="fw-bold">Registrate</div>
                    </Link>
                    <div className="container p-2">
                      <div className="row">
                        <div className="col-4 text-white">
                          Padel{" "}
                          <i className="fa-solid fa-table-tennis-paddle-ball"></i>
                        </div>
                        <div className="col-4 text-white">
                          Futbol <i className="fa-solid fa-futbol"></i>
                        </div>
                        <div className="col-4 text-white">
                          Basket <i className="fa-solid fa-basketball "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About us */}
        {/* Quienes somos */}

        <div className=" ">
          <section className="py-3 py-md-5 py-xl-8">
            <div className="container">
              <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                <div className="col-12 col-lg-6 col-xl-5">
                  <img
                    className="img-fluid rounded"
                    loading="lazy"
                    src={logopadel}
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="row justify-content-xl-center">
                    <div className="col-12 col-xl-11">
                      <h2 className="h1 mb-3  fw-bold text-white ">
                      ¿Qué es AdminPal?
                      </h2>
                      <p className="lead fs-4 fw-bolder text-secondary mb-3 text-white ">
                        AdminPal nació no solo de la necesidad de las personas
                        en buscar un lugar seguro donde jugar sino, de ofrecer
                        un servicio rapido y confiable donde hacer reservaciones
                        rapidas y personalizadas de los mejores lugares del
                        país.
                        <p className="my-2">
                          Pero quisímos más, no solo dar un servicio de
                          reservación sino, ofrecer a las personas poder mostrar
                          y administrar sus espacios deportivos al publico, todo
                          en una sola pagina.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <p className="text-center fw-bold fs-1 text-white">
          Testimonios que inspiran
        </p>
        <div className="container p-2 ">
          <div className="row">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://i.insider.com/6114f9063dd01000199d47ef?width=1000&format=jpeg&auto=webp"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Pedro Ruiz</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="card-text text-center">
                    Lo recomiendo siempre a mis amigos!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/8/10/wayekhjulogbkd3ctt3p/alejandro-galan-padel-spain"
                  className="card-img-top"
                />
                <div className="card-body ">
                  <h5 className="card-title text-center ">Aldo Saez </h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="card-text text-center">
                    Me da los mejores y mas seguros lugares {""}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/woman-holding-padel-racket.jpg?quality=82&strip=1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Luz Veronica</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="card-text text-center">
                    Es muy intuitiva y rapida, siempre la uso!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="card-text text-center fw-bold display-4 my-4 text-white mb-4">
              Descarga nuestra app
            </div>
            <div className="col-sm-6 d-flex justify-content-flex-end">
              <img src={mobiledesign} />
              <p className="col-sm-12 fw-bold p-2 display-4 text-white">
                Ingresa a la comunidad con mas crecimiento en la actualidad
                Encontraras personas de todo el mundo para compartir tus
                experiencias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mx-auto">
          <div className="card p-5   shadow  my-5  ">
            <div className="card-body">
              <div className="card-text text-center fw-bold display-4  ">
                Si deseas ingresar tus espacios deportivos para tus clientes
              </div>
              <div className="card-text text-center fw-light display-5 ">
                Administra tu negocio desde la comodidad de tu hogar
                <Link to="/ContactUs">
                  <div className="fw-bold">Contactanos</div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
