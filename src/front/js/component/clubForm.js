import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const ClubForm = ({ submit, hanndleEvent, name, descripcion, estado, ciudad, direccion, title }) => {


    return (
        <div>
            <div className="container ">

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card p-5  border-0 shadow rounded-3 my-5 ">
                            <h2 className="text-center">{title}</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" >Nombre{''}</label>
                                    <input defaultValue={name} type="text" name="name" className="form-control" onChange={hanndleEvent} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Coloque una descripcion</label>
                                    <div className="form-floating">
                                        <textarea className="form-control" name="description" defaultValue={descripcion} onChange={hanndleEvent} ></textarea>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Estado</label>
                                    <input type="text" name="estado" className="form-control" defaultValue={estado} onChange={hanndleEvent} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Ciudad</label>
                                    <input type="text" name="ciudad" className="form-control" defaultValue={ciudad} onChange={hanndleEvent} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Direccion</label>
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
        </div>
    );
};
