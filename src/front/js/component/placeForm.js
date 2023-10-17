import React, { useState, useContext, useEffect } from "react";



export const PlaceForm = ({ club, hanndleEvent, submit, name, type, description, title }) => {



    return (
        <>
        <div className="back-landing3 ">

            <div className="container ">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ancho-form">
                        <div className="card p-5  border-0 shadow rounded-3 my-2 form">
                            <h2 className="text-center fs-5">Espacio dentro del Club: {club}</h2>
                            <form>
                                <div className="row">
                                    <div className="mb-3 col-6">
                                        <label className="form-label" ><h6>Nombre</h6></label>
                                        <input type="text" name="name" defaultValue={name} className="form-control" onChange={hanndleEvent} />
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label" ><h6>Coloque una descripcion</h6></label>
                                        <div className="form-floating">
                                            <textarea className="form-control" name="description" defaultValue={description} onChange={hanndleEvent} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 col-12">
                                    <label className="form-label" >Tipo</label>
                                    <select className="form-select mb-3" defaultValue={type} name="type" onChange={hanndleEvent} aria-label="Large select example">
                                        <option value="0">Selecciones una opcion</option>
                                        <option value="Cancha de Padel">Canche de Padel</option>
                                        <option value="Cancha de Tenis">Cancha de Tenis</option>
                                        <option value="Cancha de Futbol">Cancha de Futbol</option>
                                        <option value="Cancha de Futbolito">Cancha de Futbolito</option>
                                        <option value="Cancha de Bolas Criolla">Cancha de Bolas Criollas</option>
                                        <option value="Piscina">Piscina</option>
                                    </select>
                                </div>
                            </form>
                            <button type="button" className="btn btn-primary" onClick={submit}  >{title}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PlaceForm;