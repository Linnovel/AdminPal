import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"
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
        if (dataPlace.name == "") {
            toast.error("El nombre del Lugar o Area del Club necesario")
            return
        }
        if (dataPlace.description == "") {
            toast.error("Debe ingresar una descripcion del Lugar o Area del Club")
            return
        }
        if (dataPlace.type == 0) {
            toast.error("El tipo Lugar o Area del Club es necesario")
            return
        }
        const response = await actions.registerPlace(id, dataPlace);
        if (response) {
            toast.success("Lugar del Club registrado!");
            navigate(`/image/${store.placeData.id}`);
        }

    }
    const Submit = (id) => {
        navigate(`/placelist/${id}`);
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

            <div >
                <PlaceForm hanndleEvent={hanndleEvent} submit={() => handleSubmit(id_club)} title="Guardar" />
            </div>
            
        </>

    );
};

export default RegisterPlace;