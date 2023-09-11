import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const initialValue = {
    "name": '',
    "description": ''
}

export const RegisterClub = () => {
    const { store, actions } = useContext(Context)
    const [dataClub, setDataClub] = useState(initialValue)
    const navigate = useNavigate();

    //validamos que exista un token, si no existe lo enviamos a login
    /*
    useEffect(() => {
        if (store.token === "" || !store.token) {
            navigate("/login");
            return;
        }
        actions.getUserData();
    }, [store.token]);

    */
    //capturamos el valor de los inputs 
    const hanndleEvent = (event) => {

        setDataClub({ ...dataClub, [event.target.name]: event.target.value })
    }

    //enviamos el valor
    const handleSubmit = async () => {

        const result = await actions.registerClub(dataClub);

    }


    return (
        <div>
            <div className="container ">

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card p-5  border-0 shadow rounded-3 my-5 ">
                            <h2 className="text-center">Registra tu Club</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" >Nombre{''}</label>
                                    <input type="text" name="name" className="form-control" onChange={hanndleEvent} />
                                    <label className="form-label" >Coloque una descripcion</label>
                                </div>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <textarea className="form-control" name="description" onChange={hanndleEvent} ></textarea>
                                    </div>
                                </div>
                            </form>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit} >Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterClub;