import React, { useContext, useState } from "react";
import "../../styles/home.css";
import Calendar from "./Calendar";

export const ReservasCanchas = () => {
  return (
    <>
      <div className="back-landing2 ">
        <div className="container ">
          <div className="row">
            <h3 className="display-4 text-white fw-bold">
              Canchas Disponibles
            </h3>
            <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                <img
                  src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                  className="img-fluid"
                  width="1000px"
                  height="1000px"
                />
                <div className="card-body ">
                  <div className="card-text text-center mb-2">
                    Cancha nombre y direccion.
                  </div>

                  <button
                    type="button"
                    className="cart-1 cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Reserva esta cancha
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
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="col-6 ">
                            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                              <h4 className="text-center">Calendario</h4>
                              <Calendar
                                className="text-center mb-2 p-5"
                                placeholder="Calendario"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3  my-2 p-2">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                          >
                            Example label
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Example input placeholder"
                          />
                        </div>
                        <div className="mb-3  my-2 p-2">
                          <label
                            htmlFor="formGroupExampleInput2"
                            className="form-label"
                          >
                            Another label
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Another input placeholder"
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
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

export default ReservasCanchas;
