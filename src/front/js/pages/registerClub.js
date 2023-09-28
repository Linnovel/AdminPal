import React, { useState, useContext, useEffect } from "react";
import { ClubForm } from "../component/clubForm";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const initialValue = {
    "name": '',
    "description": '',
    "ciudad": '',
    "estado": '',
    "direccion": '',
    "email": '',
    "phone": ''

}

export const RegisterClub = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [dataClub, setDataClub] = useState(initialValue)

    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {

        setDataClub({ ...dataClub, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = async () => {
        const club = await actions.registerClub(dataClub)

        alert("Club registrado");
        navigate("/clubList");


    }

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }
        actions.getUserData();
    }, [store.token]);


    return (
        <>
            <div className="back-landing3">
                <ClubForm submit={handleSubmit} hanndleEvent={hanndleEvent} title={"Registra tu Club"} />
            </div>
            <Footer className="fixed-bottom"/>
        </>
    );
};

export default RegisterClub;