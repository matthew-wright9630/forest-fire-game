import { useEffect, useState } from "react";
import "./InformationPopup.css";

function InformationPopup({
  name,
  image,
  description,
  handleCloseModal,
  isPopupOpen,
}) {
  return (
    <div className={`modal ${isPopupOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{name}</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close-button"
        />
        <div className="modal__section">

        <img src={image} alt={name} className="modal__image" />
        <p className="modal__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default InformationPopup;
