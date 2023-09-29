import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { ClubImage } from "../component/cardClubImage";

const place = ""

export const ClubsSearch = () => {
    const { store, actions } = useContext(Context)
    return (
        <>

            <div className="back-landing3">
                <div className=" container-fluid ">
                    <div className=" row d-flex justify-content-center">
                        {
                            store.clubslist.map((element, index) => {

                                return (
                                    <ClubImage index={index} name={element.name} ciudad={element.ciudad} estado={element.estado} id={element.id} />
                                );
                            })//fin del map

                        }

                    </div>
                </div>
            </div>

        </>
    );
};
