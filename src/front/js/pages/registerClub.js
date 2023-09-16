import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ClubForm } from "../component/clubForm";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const initialValue = {
    "name": '',
    "description": '',
    "ciudad": '',
    "estado": '',
    "direccion": ''

}

export const RegisterClub = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [dataClub, setDataClub] = useState(initialValue)

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }
        actions.getUserData();
    }, [store.token]);

    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {

        setDataClub({ ...dataClub, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = () => {
        actions.registerClub(dataClub);
        alert("Club registrado")
        navigate("/clubList");
    }
    const SubmitListclubs = async () => {
        navigate("/clubList");
    }

    return (
        <>
            <div>{store.userData.email}{'  '}{store.userData.id}</div>
            <ClubForm submit={handleSubmit} hanndleEvent={hanndleEvent} title={"Registra tu Club"} />
            <button className="btn btn-primary" onClick={SubmitListclubs}>Ver Clubs</button>
        </>
    );
};

export default RegisterClub;