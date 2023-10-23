import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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
            <div >
                <div className=" container ">
                    <div className=" row d-flex justify-content-center">
                        <div className="card-body text-light">
                            <h2 className=" fw-bold text-center text-black text-white">Espacios del Club</h2>
                            <h4 className="text-center text-white"> {store.placeslist.length} Espacios registrados</h4>
                        </div>
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
