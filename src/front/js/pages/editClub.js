import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClubForm } from "../component/clubForm";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"



export const EditClub = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);


    //cargamos los valores inicales
    const initialValue = {
        "name": `${store.clubData.name}`,
        "description": `${store.clubData.description}`,
        "ciudad": `${store.clubData.ciudad}`,
        "estado": `${store.clubData.estado}`,
        "direccion": `${store.clubData.direccion}`,
        "email": `${store.clubData.email}`,
        "phone": `${store.clubData.phone}`
    }
    const [dataClub, setDataClub] = useState(initialValue)

    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {
        setDataClub({ ...dataClub, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = (id_club) => {
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
        actions.editClub(id_club, dataClub);
        toast.success("Club Editado!")
        navigate("/clubList");
    }


    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            toast.error("No autenticado")
            navigate("/login");
            return;
        }
        actions.getClubData(id);
        actions.getUserData();
    }, [store.token]);

    return (
        <>

            <div >
                <ClubForm hanndleEvent={hanndleEvent} submit={() => handleSubmit(id)} name={store.clubData.name} email={store.clubData.email}
                    phone={store.clubData.phone}
                    descripcion={store.clubData.description}
                    estado={store.clubData.estado} ciudad={store.clubData.ciudad} direccion={store.clubData.direccion} title={"Editar Club"} />
            </div>
        </>
    );
};

