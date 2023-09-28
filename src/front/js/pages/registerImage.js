import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ImageForm } from "../component/imageForm";
import Footer from "../component/Footer";

const initialValue = {
    "image": '',
}

export const RegisterImage = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [dataImage, setDataImage] = useState(initialValue)
    const params = useParams();
    const id_place = parseInt(params.id_place);


    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {
        setDataImage({ ...dataImage, [event.target.name]: event.target.files })
    }

    //enviamos el valor
    const handleSubmit = async (id) => {
        const image = await actions.registerImage(id, dataImage);
        alert("Imagen Cargada");
        navigate("/clublist");

    }


    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }
        actions.getUserData();
        actions.getPlaceData(id_place);
        actions.getAllImage(id_place);
    }, [store.token]);


    return (
        <>

            <div className="container-fluid list-c ">
                <ImageForm hanndleEvent={hanndleEvent} place={store.placeData.name} submit={() => handleSubmit(id_place)} title="Cargar Imagen" />

                <div className="d-flex overflow-x-scroll">
                    {
                        store.imagesList.map((image, index) => {
                            return (
                                <div key={index} className="card col-sm-9 col-md-7 col-lg-5 mx-auto mt-5 img mb-5">
                                    <img src={image.img_url} className="card-img-top img mt-2 rounded mx-auto d-block" alt="..." />
                                </div>

                            );
                        })}
                </div>
            </div>
            
            <Footer/>
            





        </>

    );
};

