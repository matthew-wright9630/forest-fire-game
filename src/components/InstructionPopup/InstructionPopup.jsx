import { useEffect, useState } from "react";
import "./InstructionPopup.css";
import treeImage from "../../assets/Tree.png";
import fireImage from "../../assets/Fire.png";
import fireDirection from "../../assets/Burns-in-eight-directions.png";
import deadTreeImage from "../../assets/Dead_Tree.png";
import deadTreeBurningImage from "../../assets/Dead-wood-tree-burn.png";
import waterImage from "../../assets/Water.png";
import houseImage from "../../assets/House.png";
import windDirectionImage from "../../assets/Wind_Direction_Burn.png";
import fireFighterImage from "../../assets/Fire_Fighter.png";
import fireFighterProtection from "../../assets/Fire_Fighter_Protection.png";

function InformationPopup({
  name,
  image,
  description,
  handleCloseModal,
  isPopupOpen,
}) {
  return (
    <div className={`modal ${isPopupOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__instruction-container">
        <h2 className="modal__instruction-title">{name}</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close-button"
        />
        <div className="modal__element">
          <div className="modal__element-section">
            <img className="modal__element-image" src={treeImage} alt="Tree" />
            <p className="modal__element-title">Tree</p>
            <p className="modal__element-description">One part of a forest.</p>
          </div>
          <div className="modal__element-section">
            <img src={fireImage} alt="Fire" className="modal__element-image" />
            <p className="modal__element-title">Fire</p>
            <p className="modal__element-description">
              Burns trees and other fuel. Normally burns in all eight directions
              around it.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={fireDirection}
              alt="Fire Direction"
              className="modal__element-image"
            />
            <p className="modal__element-title">Directions</p>
            <p className="modal__element-description">
              Fire normally burns in all eight directions around it.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={houseImage}
              alt="House"
              className="modal__element-image"
            />
            <p className="modal__element-title">House</p>
            <p className="modal__element-description">
              Burns like a tree. You might want to protect it.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={waterImage}
              alt="Water"
              className="modal__element-image"
            />
            <p className="modal__element-title">Water</p>
            <p className="modal__element-description">
              Squares with water will not burn.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={deadTreeImage}
              alt="Dead Tree"
              className="modal__element-image"
            />
            <p className="modal__element-title">Dead Tree</p>
            <p className="modal__element-description">
              These squared are very volitile. They burn two squares on each
              flat side and one diagonally.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={deadTreeBurningImage}
              alt="Deadwood Example"
              className="modal__element-image"
            />
            <p className="modal__element-title">Dead wood Example</p>
            <p className="modal__element-description">
              The dead wood is extra fuel and burns more trees around it.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={fireFighterImage}
              alt="Firefighter"
              className="modal__element-image"
            />
            <p className="modal__element-title">Firefighter</p>
            <p className="modal__element-description">
              Keeps the square that they are on from burning. They also protect
              up to four other squares that are touching the square that they
              are on.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={fireFighterProtection}
              alt="Firefighter Protection"
              className="modal__element-image"
            />
            <p className="modal__element-title">Protection</p>
            <p className="modal__element-description">
              In this case, the firefighter is protecting the four squares
              directly to each side of the square that they are standing on.
            </p>
          </div>
          <div className="modal__element-section">
            <img
              src={windDirectionImage}
              alt="Wind Direction Burn"
              className="modal__element-image"
            />
            <p className="modal__element-title">Wind</p>
            <p className="modal__element-description">
              Burns two squares in the direction the wind is blowing from, one
              square in the two directions next to it on either side. The side
              and back squares do not burn. In this case, the wind is blowing
              from the North.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPopup;
