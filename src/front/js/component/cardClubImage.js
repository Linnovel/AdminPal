import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const ClubImage = ({ name, estado, ciudad, id, index }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [img, setImg] = useState();

  const getImage = async (id_club) => {
    const image = await actions.getPlacesClubCity(id_club);

    setImg(image);
  };

  const submitPlaces = () => {
    navigate(`/placeListReserv/${id}`);
  };

  useEffect(() => {
    getImage(id);
  }, [store.token, id]);

  return (
    <>
      <div
        key={index}
        className="col-12 col-lg-4 d-flex flex-row justify-content-center align-items-center gap-2 p-5
         d-flex flex-row justify-content-center align-items-center "
      >
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ">
          <img
            src={
              img
                ? img.img_url
                : "https://cdn-magento2-media.head.com/wysiwyg/padel-court_6.jpg"
            }
            className="img-fluid"
            width="1000px"
            height="1000px"
          />
          <div className="card-body ">
            <div className="card-text text-center mb-2">
              {name}
              {" -- "}
              {estado} {ciudad}
            </div>
            <button
              onClick={() => submitPlaces(id)}
              className="cart-1 btn cart-2 d-grid gap-2 col-6 mx-auto fw-bolder btn btn-success"
            >
              Ver espacios del club
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
