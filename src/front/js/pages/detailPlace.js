import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";



export const DetailPlace = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);





    const SubmitEdit = (id) => {
        navigate(`/editplace/${id}`)
    }
    const deletePlace = (id_club) => {
        confirm("¿Esta seguro de eliminar este Lugar?" + id)
        const eliminado = actions.deletePlace(id);
        if (eliminado) {
            navigate(`/placelist/${id_club}`);
        }
    }
    const cargarImagen = (id_place) => {
        navigate(`/image/${id_place}`);
    }

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            navigate("/login");
            return;
        }
        actions.getPlaceData(id);
        actions.getImage(id);
    }, [store.token]);
    return (
        <>

            <div className="list-c">
                <div className="container-fluid row">
                    <div className="card col-sm-9 col-md-7 col-lg-5 mx-auto mt-5 form">
                        <img src={store.imageData.img_url} className="card-img-top mt-2" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">{store.placeData.name}</h5>
                            <p className="card-text">{store.placeData.type}</p>
                            <p className="card-text">{store.placeData.description}</p>
                            <div className="d-flex justify-content-between">
                                <button href="#" className="btn btn-warning" onClick={() => SubmitEdit(id)}>Editar</button>
                                <button href="#" className="btn btn-danger" onClick={() => deletePlace(id, store.placeData.id_club)} >Eliminar</button>
                                <button href="#" className="btn btn-secondary" onClick={() => cargarImagen(id)} >imagenes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fix">
            <Footer />
            </div>
        </>
    );
};

