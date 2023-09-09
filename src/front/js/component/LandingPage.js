import React from "react";

export const LandingPage = () => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 ">
                    <h2>Encuentra el mejor jugar donde jugar con tus amigos</h2>
                    <div className="card p-5 border-0 shadow rounded-3 my-5">
                        <div className="form-floating mb-3">
                            <input type="text" name="ciudad"  className="form-control" placeholder="Ciudad" id="floatingCity"/>
                            <label htmlFor="flotaintInput" >Ciudad</label>
                        </div> 
                    </div>
                </div>
            </div>

        </div>)

}

export default LandingPage;