import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const ClubList = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [dataClubs, setDataClubs] = useState()

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }
        actions.getClubs();
        actions.getUserData();
    }, [store.token]);

    //////
    const handleSubmit = (id) => {
        // console.log(id)
        navigate(`/detailClub/${id}`)
    }



    return (
        <>
            <div className=" container ">
                <div className="col-12  d-flex justify-content-start" >{store.userData.email}{'  '}{store.userData.id}</div>
                <div className=" row d-flex justify-content-center">
                    <ul className="list-group col-12">
                        {store.clubslist.map((element, index) => {
                            return (
                                <li className="list-group-item list-group-item-action d-flex justify-content-between" key={element.id} onClick={() => handleSubmit(element.id)} >
                                    {element.name}{' '}{element.estado}{' '}{element.ciudad}{' '}{element.direccion}{"  "}{element.id}
                                </li>
                            );
                        })//fin del map
                        }
                        <li className="list-group-item d-flex justify-content-between text-bg-info fw-bold" >{store.clubslist.length} Clubs Numbers</li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default ClubList;