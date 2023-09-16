import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const initialValue = {
    "name": '',
    "description": '',
    "tipo": ''

}

export const RegisterPlace = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [dataClub, setDataClub] = useState(initialValue)

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }
        actions.getUserData();
    }, [store.token]);

    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {

        setDataClub({ ...dataClub, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = () => {
        actions.registerClub(dataClub);
        alert("Club registrado")
        navigate("/clubList");
    }
    const SubmitListclubs = async () => {
        navigate("/clubList");
    }

    return (
        <div>
            <div className="container ">

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card p-5  border-0 shadow rounded-3 my-5 ">
                            <h2 className="text-center">Cargar Lugar (campo, canchas, Piscinas)</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" >Nombre{''}</label>
                                    <input type="text" name="name" className="form-control" onChange={hanndleEvent} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Coloque una descripcion</label>
                                    <div className="form-floating">
                                        <textarea className="form-control" name="description" onChange={hanndleEvent} ></textarea>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Tipo</label>
                                    <select class="form-select form-select-lg mb-3" name="tipo" onChange={hanndleEvent} aria-label="Large select example">
                                        <option selected value="Canche de Padel">Canche de Padel</option>
                                        <option value="Cancha de Tenis">Cancha de Tenis</option>
                                        <option value="Cancha de Futbol">Cancha de Futbol</option>
                                        <option value="Cancha de Futbolito">Cancha de Futbolito</option>
                                        <option value="Cancha de Bolas Criolla">Cancha de Bolas Criollas</option>
                                        <option value="Piscina">Piscina</option>
                                    </select>
                                </div>
                            </form>
                            <button type="button" className="btn btn-primary"  >Cargar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPlace;