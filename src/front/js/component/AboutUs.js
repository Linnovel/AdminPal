import React from "react";
import padelpal from "../../img/padelpal.png";

const AboutUs =() => {
    return(<>
    <div className="back-landing3">
        <div className="text-center">
            <h1 className="fw-bolder fs-1 text-white p-3">Tecnología y deportes</h1>
        </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="d-flex justify-content-flex-start">
                        <div className="card gap-2 p-2 m-2 fw-semibold">
                            <p>AdminPal: Administracion de los mejores momentos gracias a la tecnología</p>
                            <div>Encuentra lo que deseas</div>
                            <p>Con AdminPal tienes la posibilidad de crear partidos privados con amigos y seres queridos en cualquier momento</p>
                            <p>Reserva</p>
                            <p>Con nuestro sistema de reservas puedes hacerlo cuando quieras y donde seas, siempre ayudandote a encontrar lo mejor para ti</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    
    </>)
}

export default AboutUs;