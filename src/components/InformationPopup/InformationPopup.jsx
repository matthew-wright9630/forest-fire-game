import ReactDOM from "react-dom";
import "./InformationPopup.css";
import { useEffect, useState } from "react";

function InformationPopup({
  name,
  image,
  description,
  handleCloseModal,
  isPopupOpen,
  isClosing,
}) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      setTimeout(() => setIsOpening(true), 10);
    }
  }, [isPopupOpen]);

  return ReactDOM.createPortal(
    <div className={`modal ${isOpening && !isClosing ? "modal_opened" : ""}`}>
      <div className="modal__container__information">
        <h2 className="modal__title">{name}</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close-button"
        />
        <div className="modal__section">
          <img src={image} alt={name} className="modal__image" />
          <p className="modal__element-description">{description}</p>
        </div>
      </div>
    </div>,
    document.body // 👈 renders it outside the board
  );
}

export default InformationPopup;
