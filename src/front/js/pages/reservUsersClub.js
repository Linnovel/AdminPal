import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"
import { Reserva } from "../component/reserva";

export const ReservClub = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);






    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            toast.error("No autenticado");
            navigate("/login");
            return;
        }

        actions.getPlaceData(id);
        actions.getReservPlace(id);
    }, [store.token]);

    return (
        <>
            <div >
                <div className=" container ">
                    <h2 className="text-center  text-white p-2 fw-bold"> Reservas {store.placeData.name}</h2>

                    <div className="card col-sm-12 col-md-7 col-lg-5 mx-auto form">
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-center"> Reservas Realizadas</h5>
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item  form fw-semibold">
                                    {store.listReserv.length} reservas
                                </li>
                                {
                                    store.listReserv.map((element, index) => {
                                        return (
                                            <Reserva fecha={element.fecha}
                                                time={element.time} id={element.id}

                                            />
                                        );
                                    }) //fin del map
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    );
};

