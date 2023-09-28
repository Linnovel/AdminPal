import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const ClubsSearch = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();




    const fetchClub = async () => {
        const response = await actions.getClubs();
        if (response === 0) {
            registerClub();
        }
    }


    return (
        <>

            <div className="back-landing3">
                <div className=" container-fluid ">
                    <div className=" row d-flex justify-content-center">
                        {
                            store.clubslist.map((element, index) => {
                                return (
                                    <div className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5">
                                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
                                            <img
                                                src="https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
                                                className="img-fluid"
                                                width="1000px"
                                                height="1000px"
                                            />
                                            <div className="card-body ">
                                                <div className="card-text text-center mb-2">
                                                    {element.name}{' -- '}{element.estado}{' '}{element.ciudad}
                                                </div>
                                                <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success">
                                                    Reserva este campo
                                                </button>

                                            </div>
                                        </div>
                                    </div>


                                );
                            })//fin del map

                        }

                    </div>
                </div>
            </div>
        </>
    );
};

