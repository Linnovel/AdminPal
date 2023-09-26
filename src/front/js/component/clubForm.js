import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const ClubForm = ({ submit, hanndleEvent, name, email, phone, descripcion, estado, ciudad, direccion, title }) => {


    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ancho-form">
                    <div className="card p-5  border-0 shadow rounded-3 my-2 form ">
                        <h2 className="text-center fw-semibold fst-italic">{title}</h2>
                        <form>
                            <div className="row">
                                <div className="mb-3 col-6">
                                    <label className="form-label" ><h6>Nombre</h6></label>
                                    <input defaultValue={name} type="text" name="name" className="form-control" onChange={hanndleEvent} />
                                </div>
                                <div className="mb-3 col-6">
                                    <label className="form-label" ><h6>Email</h6></label>
                                    <input defaultValue={email} type="email" name="email" className="form-control" onChange={hanndleEvent} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-6">
                                    <label className="form-label" ><h6>Estado</h6></label>
                                    <input type="text" name="estado" className="form-control" defaultValue={estado} onChange={hanndleEvent} />
                                </div>
                                <div className="mb-3 col-6">
                                    <label className="form-label" ><h6>Ciudad</h6></label>
                                    <input type="text" name="ciudad" className="form-control" defaultValue={ciudad} onChange={hanndleEvent} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col-6">
                                    <label className="form-label" ><h6>Telefono</h6></label>
                                    <input defaultValue={phone} type="text" name="phone" className="form-control" onChange={hanndleEvent} />
                                </div>
                                <div className="mb-3 col-6">
                                    <label className="form-label" ><h6>Coloque una descripcion</h6></label>
                                    <div className="form-floating">
                                        <textarea className="form-control" name="description" defaultValue={descripcion} onChange={hanndleEvent} ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 col-12">
                                <label className="form-label" ><h6>Direccion</h6></label>
                                <div className="form-floating">
                                    <textarea className="form-control" name="direccion" defaultValue={direccion} onChange={hanndleEvent} ></textarea>
                                </div>
                            </div>
                        </form>
                        <button type="button" className="btn btn-primary" onClick={submit} >{title}</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
