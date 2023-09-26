import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";




export const ClubList = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleSubmit = (id) => {
        navigate(`/detailClub/${id}`)
    }

    const registerClub = () => {
        navigate("/clubs");
    }

    const fetchClub = async () => {
        const response = await actions.getClubs();
        if (response === 0) {
            registerClub();
        }
    }

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }

        actions.getUserData();
        actions.getClubs();
    }, [store.token]);

    return (
        <>

            <div className="back-landing3">
                <div className=" container-fluid ">
                    <div className=" row d-flex justify-content-center">
                        <ul className="list-group col-8  mt-5">

                            {
                                store.clubslist.map((element, index) => {
                                    return (
                                        <li className="list-group-item list-group-item-action form " key={element.id} onClick={() => handleSubmit(element.id)} >
                                            {element.name}{' -- '}{element.estado}{' '}{element.ciudad}
                                        </li>
                                    );
                                })//fin del map

                            }
                            <li className="list-group-item d-flex justify-content-between text-bg-info fw-bold" >{store.clubslist.length} Clubs Numbers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClubList;