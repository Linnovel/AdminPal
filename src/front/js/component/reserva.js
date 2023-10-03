import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";



export const Reserva = ({ fecha, time, id }) => {

    let fechaF = new Date(fecha);
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const diaSemana = diasSemana[fechaF.getDay()];
    const dia = fechaF.getDate();
    const mes = meses[fechaF.getMonth()];
    const anio = fechaF.getFullYear();

    const fechaFormateada = `${diaSemana} ${dia} de ${mes} ${anio}`
    return (

        <li className="list-group-item text-white form fw-semibold">
            {fechaFormateada}
            {"----"}
            {time}
            <button onClick={() => deleteReserv(element.id)}>cancelar</button>
        </li >


    );
};
