import { useEffect, useState } from "react";
import "./HowToPlayPopup.css";

import startScreenshot from "../../assets/Start-Game.png";
import windDirection from "../../assets/Determine-Wind-Direction.png";
import compass from "../../assets/Compass-Screenshot.png";
import placeFirefighters from "../../assets/No-Fire-Fighters.png";
import firefighterProtection from "../../assets/Firefighter-Protection-Decision.png";
import noTreesLeft from "../../assets/No-Trees-To-Protect.png";
import generateFire from "../../assets/Fire-Generated.png";
import spreadFire from "../../assets/Fire-Is-Spreading.png";
import fireUnableToSpread from "../../assets/Fire-Unable-To-Spread.png";
import houseIsBurning from "../../assets/House-Has-Burned.png";

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
            <img
              src={startScreenshot}
              alt="Start Screenshot"
              className="modal__how-to-play-image"
            />
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              2) If there is a wind effect, click "Determine Wind Direction"
            </p>
            <img
              src={windDirection}
              alt="Determine Wind Direction"
              className="modal__how-to-play-image"
            />
            <img
              src={compass}
              alt="Compass"
              className="modal__how-to-play-image"
            />
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              3) If there are any firefighters, click a tree or dead tree to
              place a firefighter there.
            </p>
            <img
              src={placeFirefighters}
              alt="Placing Fire Fighters"
              className="modal__how-to-play-image"
            />
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description ">
              4) When a firefighter is placed, click on any of the transparent
              dots to add the protection. Remember, each firefighter can only
              protect 4 spaces!
            </p>
            <img
              src={firefighterProtection}
              alt="Firefighter Protection Decision"
              className="modal__how-to-play-image"
            />
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description ">
              Note: If there are no more trees that firefighters can protect,
              click the "No more trees to protect" button.
            </p>
            <img
              src={noTreesLeft}
              alt="Protecting Trees"
              className="modal__how-to-play-image"
            />
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              5) Click "Generate fire". Repeat this step until all fires are
              placed.
            </p>
            <img
              src={generateFire}
              alt="Placing Fire Fighters"
              className="modal__how-to-play-image"
            />
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              6) Click "Spread Fire". Repeat this until either the house is
              burned, or until the fire cannot spread any farther.
            </p>
            <img
              src={spreadFire}
              alt="Placing Fire Fighters"
              className="modal__how-to-play-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlayPopupIsOpen;
