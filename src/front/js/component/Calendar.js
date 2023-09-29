import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const initialDate = [{
  date : "",
}]

const Calendar = () => {

  const [getDate, setGetDate] = useState(initialDate)

  const handleDate = (event) => {
setGetDate({...getDate, [event.target.name]: event.target.value})
    console.log(setGetDate);
   
  }

    return (
      <div>
        <form>
            <input type="datetime-local" id="date" name="date" className="form-control" placeholder="dd-mm-yyyy" value="date" onChange={handleDate}/>
            <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success my-2" >
                  Confirma
                </button>
        </form>
      </div>
    );
}

export default Calendar