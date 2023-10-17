import React from "react";
import logopadel from "../../img/logopadel.png";
import jose from "../../img/jose.png";
import Luis from "../../img/Luis.png";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="">
      <div className=" p-3">
        <h2 className="text-center display-2 fw-bold text-white">
          El equipo detras de AdminPal {""}
          <i className="fa-solid fa-table-tennis-paddle-ball"></i>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card ">
                <img
                  src={jose}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold fs-2">Jose Perdomo</h5>
                  <p className="card-text text-center fw-bold fs-2">
                    Ingeniero en sistemas y padre de familia
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <img
                  src={Luis}
                  className="card-img-top"
                />
                
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold fs-2">Luis Linares</h5>
                  <p className="card-text text-center fw-bold fs-2">Disenador Grafico y editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
