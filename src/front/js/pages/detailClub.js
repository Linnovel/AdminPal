import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



export const DetailClub = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);


    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            navigate("/login");
            return;
        }
        actions.getClubData(id);
    }, [store.token]);


    const SubmitEdit = (id_club) => {
        navigate(`/editClub/${id_club}`)
    }
    const deleteClub = (id_club) => {
        confirm("¿Esta seguro de eliminar este Club?")
        navigate("/clubList");
    }
    const cargarCampo = (id_club) => {
        navigate(`/registerPlace/${id_club}`);
    }


    return (
        <>
            <div>{store.clubData.id}</div>
            <div className="container row">
                <div className="card col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{store.clubData.name}</h5>
                        <p className="card-text">{store.clubData.ciudad}</p>
                        <p className="card-text">{store.clubData.estado}</p>
                        <p className="card-text">{store.clubData.direccion}</p>
                        <p className="card-text">{store.clubData.description}</p>
                        <div className="d-flex justify-content-between">
                            <button href="#" className="btn btn-warning" onClick={() => SubmitEdit(id)}>Editar</button>
                            <button href="#" className="btn btn-danger" onClick={() => deleteClub(id)} >Eliminar</button>
                            <button href="#" className="btn btn-secondary" onClick={() => cargarCampo(id)} >Campos</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

