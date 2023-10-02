import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { elementType } from "prop-types";
import { toast } from "react-toastify"

export const ReservClient = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();




    const deleteReserv = async (id) => {
        confirm("¿Esta seguro de eliminar esta Reserva?")
        const eliminado = await actions.deleteReserva(id);
        if (eliminado) {
            navigate(`/`);
        }
    };




    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            toast.error("No autenticado");
            navigate("/login");
            return;
        }


        actions.getReservClient();
    }, [store.token]);

    return (
        <>
            <div className="list-c">
                <div className=" container ">
                    <h2 className="text-center text-white  p-2 fw-bold"> Reservas</h2>

                    <div className="card col-sm-12 col-md-7 col-lg-5 mx-auto form">
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-center"> Reservas Realizadas</h5>
                            <ul className="list-group list-group-flush text-white">
                                <li className="list-group-item text-white form fw-semibold">
                                    {store.listReserv.length} reservas
                                </li>
                                {
                                    store.listReserv.map((element, index) => {
                                        return (
                                            <li
                                                className="list-group-item text-white form fw-semibold"
                                                key={element.id}

                                            >
                                                {element.fecha}
                                                {"----"}
                                                {element.time}
                                                <button onClick={() => deleteReserv(element.id)}>cancelar</button>
                                            </li>
                                        );
                                    }) //fin del map
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fix">
            </div>
        </>
    );
};

