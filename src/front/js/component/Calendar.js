import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";



const Calendar = ({id}) => {
const {store, actions} = useContext(Context)
  const [getDate, setGetDate] = useState();

  const handleDate = (event) => {
setGetDate(event.target.value)
   
  }

  const handleSubmit=() => {
    const [date, time] = getDate.split("T")
    actions.createReservation(id, date, time)
  }

  
  

    return (
      <div>
        <form>
            <input type="datetime-local" id="date" name="date" className="form-control" placeholder="dd-mm-yyyy"  onChange={handleDate}/>
            <button type="button" className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success my-2" onClick={handleSubmit}>
                  Confirma
                </button>
        </form>
      </div>
    );
}

export default Calendar