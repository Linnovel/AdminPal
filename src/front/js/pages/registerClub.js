import React, { useState, useContext, useEffect } from "react";
import { ClubForm } from "../component/clubForm";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"


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
        if (dataClub.name == "") {
            toast.error("El nombre es necesario para crear tu club")
            return
        }
        if (dataClub.email == "") {
            toast.error("El email es necesario para crear tu club")
            return
        }
        if (dataClub.estado == "") {
            toast.error("El estado es necesario para crear tu club")
            return
        }
        if (dataClub.ciudad == "") {
            toast.error("La ciudads necesaria para crear tu club")
            return
        }
        if (dataClub.direccion == "") {
            toast.error("La direccion es necesaria para crear tu club")
            return
        }
        if (dataClub.telefono == "") {
            toast.error("el telefono es necesario para crear tu club")
            return
        }
        if (dataClub.description == "") {
            toast.error("Debes introducir una descripcion para crear tu club")
            return
        }

        const club = await actions.registerClub(dataClub)

        toast.success("Club registrado!");
        navigate("/clubList");


    }

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            toast.error("No autenticado")
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
        </>
    );
};

export default RegisterClub;