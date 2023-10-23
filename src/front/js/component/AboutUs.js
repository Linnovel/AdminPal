import React from "react";
import logopadel from "../../img/logopadel.png";
import jose from "../../img/jose.png";
import perfil from "../../img/perfil.jpeg";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="">
      <section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8">
        <h3 class="fs-5 mb-2 text-secondary text-white text-uppercase">Quienes somos?</h3>
        <h2 class="display-5 text-white mb-4">Somos personas interesadas en desarrollar soluciones y en el proceso dar nuestro mejor desempeño como profesionales.</h2>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0">
      <div className="col-12 col-lg-6">
        <div className="card bg-light p-3 m-0">
          <div className="row gy-3 gy-md-0 align-items-md-center">
            <div className="col-md-5">
              <img src={perfil} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-7">
              <div className="card-body p-0">
                <h2 className="card-title h4 mb-3">Luis Linares</h2>
                <p className="card-text lead">Diseñador Grafico bilingüe, creatividad e identidad visual. Ahora con estudios y practicas en programación, no solo le doy la identidad a tu marca, ahora puedo crear tu pagina web.</p>
                <p className="card-text lead">Mi desempeño en este proyecto fue mayormente el frontend, usando mi experiencia como diseñador, mi meta fue crear una pagina que le brinde a los usuarios una gran experiencia, una interfaz con todas las caracteristicas utiles para que sea intuitivo y facil de usar.
                </p>
                <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="https://www.linkedin.com/in/luis-linares-77853b227/"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fs-2 fa-linkedin"></i>
            </a>
                <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="https://github.com/Linnovel"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-github fs-2  " target="_blank" ></i>
            </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card bg-light p-3 m-0">
          <div className="row gy-3 gy-md-0 align-items-md-center">
            <div className="col-md-5">
              <img src={jose} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-7">
              <div className="card-body p-0">
                <h2 className="card-title h4 mb-3">Jose Perdomo</h2>
                <p className="card-text lead">Padre de familia con una amplia experiencia de mas de 12 años de desarrollador PHP, ingenieron en sistemas y siempre con las ganas de ser mejor, ponerme metas y cumplirlas</p>
                <p className="card-text lead">Mi roll principal fue el backend, usando mi experiencias en ingeniera y PHP logré aplicar las nuevas tecnologías aprendidas mediante el curso para hacer un trabajo optimo y alcanzar la meta y poder entregar este proyecto de manera optima y profesional, con la meta final de llevar esta pagina al mercado actual y poder brindar este servicio al publico deportista.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default AboutUs;
