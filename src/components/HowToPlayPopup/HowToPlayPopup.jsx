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
import mobileStartScreen from "../../assets/Mobile-Game-Page.png";
import mobileWindDirection from "../../assets/Mobile-Determine-Wind-Direction.png";
import mobileCompass from "../../assets/Mobile-Compass.png";
import mobilePlaceFirefighters from "../../assets/Mobile-Firefighter-Placement.png";
import mobileFirefighterProtection from "../../assets/Mobile-Firefighter-Protection.png";
import mobileNoTreesLeft from "../../assets/Mobile-No-More-Trees.png";
import mobileGenerateFire from "../../assets/Mobile-Generate-Fire.png";
import mobileSpreadFire from "../../assets/Mobile-Spread-Fire.png";
import mobileHouseIsBurning from "../../assets/Mobile-House-Burned.png";

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
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={startScreenshot}
                alt="Start Screenshot"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobileStartScreen}
                alt="Start Screenshot"
                className="modal__how-to-play-image"
              />
            )}
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              2) If there is a wind effect, click "Determine Wind Direction"
            </p>
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={windDirection}
                alt="Determine Wind Direction"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobileWindDirection}
                alt="Determine Wind Direction"
                className="modal__how-to-play-image"
              />
            )}
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={compass}
                alt="Compass Image"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobileCompass}
                alt="Compass Image"
                className="modal__how-to-play-image"
              />
            )}
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              3) If there are any firefighters, click a tree or dead tree to
              place a firefighter there.
            </p>
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={placeFirefighters}
                alt="Place Firefighters"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobilePlaceFirefighters}
                alt="Place Firefighters"
                className="modal__how-to-play-image"
              />
            )}
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description ">
              4) When a firefighter is placed, click on any of the transparent
              dots to add the protection. Remember, each firefighter can only
              protect 4 spaces!
            </p>
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={firefighterProtection}
                alt="Protect Trees"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobileFirefighterProtection}
                alt="Protect Trees"
                className="modal__how-to-play-image"
              />
            )}
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description ">
              Note: If there are no more trees that firefighters can protect,
              click the "No more trees to protect" button.
            </p>
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={noTreesLeft}
                alt="No Trees Left"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobileNoTreesLeft}
                alt="No Trees Left"
                className="modal__how-to-play-image"
              />
            )}
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
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={generateFire}
                alt="Generate Fire"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobileGenerateFire}
                alt="Generate Fire"
                className="modal__how-to-play-image"
              />
            )}
          </div>
          <div className="modal__element-section modal__how-to-play-section">
            <p className="modal__element-description">
              6) Click "Spread Fire". Repeat this until either the house is
              burned, or until the fire cannot spread any farther.
            </p>
            {!window.matchMedia("(max-width: 650px)").matches ? (
              <img
                src={spreadFire}
                alt="Spread Fire"
                className="modal__how-to-play-image"
              />
            ) : (
              <img
                src={mobileSpreadFire}
                alt="Spread Fire"
                className="modal__how-to-play-image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlayPopupIsOpen;
