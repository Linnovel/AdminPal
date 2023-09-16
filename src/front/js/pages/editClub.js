import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClubForm } from "../component/clubForm";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const EditClub = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);


    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            navigate("/login");
            return;
        }
        actions.getClubData(id);
        actions.getUserData();
    }, [store.token]);

    //cargamos los valores inicales
    const initialValue = {
        "name": `${store.clubData.name}`,
        "description": `${store.clubData.description}`,
        "ciudad": `${store.clubData.ciudad}`,
        "estado": `${store.clubData.estado}`,
        "direccion": `${store.clubData.direccion}`
    }
    const [dataClub, setDataClub] = useState(initialValue)

    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {
        setDataClub({ ...dataClub, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = (id_club) => {
        actions.editClub(id_club, dataClub);
        alert("Club Editado")
        navigate("/clubList");
    }


    return (
        <>
            <ClubForm hanndleEvent={hanndleEvent} submit={() => handleSubmit(id)} name={store.clubData.name} descripcion={store.clubData.description}
                estado={store.clubData.estado} ciudad={store.clubData.ciudad} direccion={store.clubData.direccion} title={"Editar Club"} />
        </>
    );
};

