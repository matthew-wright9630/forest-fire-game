import { useEffect, useState } from "react";
import "./HowToPlayPopup.css";

function HowToPlayPopupIsOpen({
  name,
  image,
  description,
  handleCloseModal,
  isPopupOpen,
}) {
  return (
    <div className={`modal ${isPopupOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__how-to-play-container">
        <h2 className="modal__instruction-title">{name}</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close-button"
        />
        <div className="modal__element modal__how-to-play-element">
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description modal__how-to-play-description">
              1) Click the "Start Game" button
            </p>
            {/* <img src={startScreenshot} alt="" className="modal__how-to-play-image" /> */}
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              2) If there is a wind effect, click "Determine Wind Direction"
            </p>
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              3) If there are any firefighters, click a tree or dead tree to
              place a firefighter there.
            </p>
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description ">
              4) After firefighters are placed, click on any trees or dead trees
              around them. Please select trees left to right, top to bottom.
            </p>
            <p className="modal__element-description ">
              Note: If there are no more trees that firefighters can protect,
              click the "No more trees to protect" button. Or if trees were not
              protected in the correct way, click the "Reset forest Protection"
              reset.
            </p>
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              5) Click "Generate fire". Repeat this step until all fires are
              placed.
            </p>
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              6) Click "Spread Fire". Repeat this until either the house is
              burned, or until the fire cannot spread any farther.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlayPopupIsOpen;
