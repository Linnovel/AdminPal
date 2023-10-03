import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const Reserva = ({ fecha, time, id }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    let fechaF = new Date(fecha);
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const diaSemana = diasSemana[fechaF.getDay()];
    const dia = fechaF.getDate();
    const mes = meses[fechaF.getMonth()];
    const anio = fechaF.getFullYear();

    const fechaFormateada = `${diaSemana} ${dia} de ${mes} ${anio}`


    const deleteReserv = async (id) => {
        const eliminado = await actions.deleteReserva(id);
        if (eliminado) {
            navigate(`/`);
        }
    };



    return (

        <li className="list-group-item text-white form fw-semibold">
            {fechaFormateada}
            {"----"}
            {time}
            {" "}
            <button class="btn btn-danger" onClick={() => deleteReserv(id)}>cancelar</button>
        </li >


    );
};
