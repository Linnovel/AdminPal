import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";

export const PlaceReserv = ({ name, type, description, id_place, index }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [img, setImg] = useState([]);

  const getImage = async (id) => {
    const image = await actions.getImage(id);
    setImg(image);
  };

  useEffect(() => {
    getImage(id_place);
  }, [store.token, id_place]);
  return (
    <>
      <div
        key={index}
        className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5
         d-flex flex-row justify-content-center align-items-center  "
      >
        <div className="card shadow-sm p-3 mb-5  rounded ">
          <img
            src={
              img
                ? img?.img_url
                : "https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
            }
            className="img-fluid"
            width="1000px"
            height="1000px"
          />
          <div className="card-body ">
            <div className="card-text text-start mb-2">{name}</div>
            <div className="card-text text-start mb-2">{type}</div>
            <div className="card-text text-start mb-2">{description}</div>
            <button
              type="button"
              className="cart-1 cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Reserva este espacio
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Haz tu reservacion aqui.
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                      <h4 className="text-center">Calendario</h4>
                      <Calendar id={id_place} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
