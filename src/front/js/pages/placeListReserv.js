import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import { toast } from "react-toastify"
import { PlaceReserv } from "../component/cardPlaceReserv";


export const PlaceListReserv = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    const id_club = parseInt(params.id_club);




    const fetchPlace = async () => {
        const response = await actions.getPlaces(id_club);
        if (response === 0) {
            registerPlace();
        }
    };


    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        fetchPlace();
        actions.getUserData();
    }, [store.token]);

    return (
        <>
            <div className="list-c">
                <div className=" container ">
                    <div className=" row d-flex justify-content-center">
                        {
                            store.placeslist.map((element, index) => {
                                return (

                                    <PlaceReserv name={element.name} type={element.type}
                                        description={element.description}
                                        id_place={element.id} index={index} />
                                )
                            }) //fin del map
                        }

                    </div>
                </div>
            </div>
        </>
    );
};