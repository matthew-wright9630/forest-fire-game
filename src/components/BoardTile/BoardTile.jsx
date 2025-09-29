import { useEffect, useState } from "react";
import "./BoardTile.css";
import InformationPopup from "../InformationPopup/InformationPopup";
import dot from "../../assets/Protection-Dot-Transparent.png";

function BoardTile({
  title = "",
  lastRow = "false",
  item,
  fireFighterPresent,
  handleAddFireFighter,
  handleProtectTrees,
  firefighterPlaced,
  id,
  transparentClassName,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function buttonClicked() {
    if (firefighterPlaced) {
      handleProtectTrees(item);
    } else if (fireFighterPresent) {
      handleAddFireFighter(item);
    } else {
      setIsPopupOpen(true);
    }
  }

  function handleCloseModal() {
    setIsPopupOpen(false);
  }

  function closeWithAnimation() {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      handleCloseModal();
    }, 300);
  }

  useEffect(() => {
    if (!isPopupOpen) return;

    const handleEscPress = (evt) => {
      if (evt.key === "Escape") {
        closeWithAnimation();
      }
    };

    function handleOverlayClick(evt) {
      if (evt.target.classList.contains("modal_opened")) {
        closeWithAnimation();
      }
    }

    document.addEventListener("keydown", handleEscPress);
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscPress);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [isPopupOpen]);

  return (
    <div
      id={id}
      className={`board__tile ${lastRow === "true" ? "board__empty-cell" : ""}`}
    >
      <h3 className="board-tile__name">{title}</h3>
      {/* <p className="board-tile__type">{item?.name}</p> */}

      {item ? (
        <button onClick={buttonClicked} className="board-tile__button">
          <img
            className={`board-tile__image`}
            src={item?.image}
            alt={item?.name}
          />
          {transparentClassName ? (
            <img className={transparentClassName} src={dot}></img>
          ) : (
            ""
          )}
        </button>
      ) : (
        ""
      )}
      {isPopupOpen ? (
        <InformationPopup
          name={item.name}
          image={item.image}
          description={item.description}
          handleCloseModal={closeWithAnimation}
          isPopupOpen={isPopupOpen}
          isClosing={isClosing}
          setIsClosing={setIsClosing}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default BoardTile;
