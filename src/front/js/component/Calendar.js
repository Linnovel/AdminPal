import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


const Calendar = () => {

  const [getDate, setGetDate] = useState('')

  const handleDate = (event) => {
    const getTodoValue = event.target.value;

    console.log(getTodoValue);
   
  }

  
    return (
      <div>
        <form>
            <input type="datetime-local" id="date" name="datepicker" className="form-control" placeholder="dd-mm-yyyy"  onChange={handleDate}/>
            <button className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success my-2" >
                  Confirma
                </button>
        </form>
      </div>
    );
}

export default Calendar