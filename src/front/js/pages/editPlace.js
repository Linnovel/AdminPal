import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PlaceForm } from "../component/placeForm";
import { toast } from "react-toastify"



export const EditPlace = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);

    //cargamos los valores inicales
    const initialValue = {
        "name": `${store.placeData.name}`,
        "type": `${store.placeData.type}`,
        "description": `${store.placeData.description}`
    }

    const [dataPlace, setDataPlace] = useState(initialValue)

    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {
        setDataPlace({ ...dataPlace, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = async (id, id_club) => {
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
        const editado = await actions.editPlace(id, dataPlace);
        toast.success("Lugar Editado!")
        navigate(`/placelist/${id_club}`);

    }


    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            toast.error("No autenticado")
            navigate("/login");
            return;
        }
        actions.getPlaceData(id);
    }, [store.token]);

    return (
        <>


            <div className="back-landing3">
                <PlaceForm hanndleEvent={hanndleEvent} submit={() => handleSubmit(id, store.placeData.id_club)} name={store.placeData.name} description={store.placeData.description}
                    type={store.placeData.type} title={"Editar Lugar"} />
            </div>
        </>

    );
};

