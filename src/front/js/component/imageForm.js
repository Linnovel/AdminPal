import React, { useState, useContext, useEffect } from "react";
import { Panel } from "./panel";



export const ImageForm = ({ title, hanndleEvent, submit, place }) => {


    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ancho-form">
                        <div className="card p-5  border-0 shadow rounded-3 my-2 form">
                            <h2 className="text-center fs-5">Imagen del {place}</h2>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="file" name="image" className="form-control" id="inputGroupFile02" onChange={hanndleEvent} />
                                </div>
                            </form>
                            <button type="button" className="btn btn-primary" onClick={submit}  >{title}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

