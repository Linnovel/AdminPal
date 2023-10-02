import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Calendar = ({ id }) => {
  const { store, actions } = useContext(Context)
  const [getDate, setGetDate] = useState();
  const navigate = useNavigate();

  const handleDate = (event) => {
    setGetDate(event.target.value)

  }

  const handleSubmit = () => {
    if (store.token === "" || !store.token) {
      navigate("/login");
      toast.error("No autenticado")
      return;
    }
    const [date, time] = getDate.split("T")
    const reserva = actions.createReservation(id, date, time)
    if (reserva) {
      navigate("/");
      toast.success("Espacio Reservado")
      return;
    } else {
      navigate("/");
      toast.error("Ocurrio un error al hacer la reserva")
      return;

    }

  }



  return (
    <div>
      <form>
        <input type="datetime-local" id="date" name="date" className="form-control" placeholder="dd-mm-yyyy" onChange={handleDate} />
        <button type="button" data-bs-dismiss="modal" className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success my-2" onClick={handleSubmit}>
          Confirma
        </button>
      </form>
    </div>
  );
}

export default Calendar