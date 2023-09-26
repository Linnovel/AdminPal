import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PlaceForm } from "../component/placeForm";



const initialValue = {
    "name": '',
    "description": '',
    "type": '',
    "img": ''

}

export const RegisterPlace = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [dataPlace, setDataPlace] = useState(initialValue)
    const params = useParams();
    const id_club = parseInt(params.id_club);

    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {
        setDataPlace({ ...dataPlace, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = async (id) => {
        const response = await actions.registerPlace(id, dataPlace);
        if (response) {
            alert("Area registrada");
            navigate(`/image/${store.placeData.id}`);
        }

    }
    const Submit = (id) => {
        navigate(`/placelist/${id}`);
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
                <PlaceForm hanndleEvent={hanndleEvent} submit={() => handleSubmit(id_club)} title="Guardar" />
                <button onClick={() => Submit(id_club)}>ver mi lista de lugares</button>
            </div>
        </>

    );
};

export default RegisterPlace;