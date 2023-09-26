import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Panel } from "../component/panel";



export const EditUser = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const userValue = {
        "name": `${store.dataUser.name}`,
        "last_name": `${store.dataUser.last_name}`,
        "email": `${store.dataUser.email}`,
        "password": ""
    }

    const [user, setUser] = useState(userValue)

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (id) => {
        const result = await actions.editUser(id, user);
        alert("Usuario Actualizado")
        navigate("/clublist")

    }

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            alert("No autenticado")
            navigate("/login");
            return;
        }
        actions.getUserData();
        actions.getUserIdData(store.userData.id);
    }, [store.token]);


    return (
        <>
            <Panel />
            <div className="back-landing3">
                <div className="container ">
                    <div className="row ">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ancho-form">
                            <div className="card p-5  border-0 shadow rounded-3 my-5 form">
                                <h2 className="text-center">Actualizacion de Usuario {''}<i className="fa-solid fa-user"></i></h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label" >Nombre</label>
                                        <input type="text" name="name" defaultValue={store.dataUser.name} className="form-control" onChange={handleChange} />
                                        <div id="emailHelp" ></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label" >Apellido</label>
                                        <input type="text" name="last_name" defaultValue={store.dataUser.last_name} className="form-control" onChange={handleChange} />
                                        <div id="emailHelp"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label" >Correo Electronico</label>
                                        <input type="email" name="email" defaultValue={store.dataUser.email} className="form-control" id="exampleInputEmail1" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña aqui" onChange={handleChange} />
                                    </div>
                                </form>
                                <button type="button" className="btn btn-primary" onClick={() => handleSubmit(store.dataUser.id)}>Actualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

