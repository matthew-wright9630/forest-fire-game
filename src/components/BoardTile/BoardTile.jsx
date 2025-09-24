import { useEffect, useState } from "react";
import "./BoardTile.css";
import InformationPopup from "../InformationPopup/InformationPopup";

function BoardTile({
  title = "",
  gridRow,
  lastRow = "false",
  item,
  fireFighterPresent,
  handleAddFireFighter,
  handleProtectTrees,
  forestIsProtected,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function buttonClicked() {
    if (fireFighterPresent) {
      handleAddFireFighter(item);
    } else if (!forestIsProtected) {
      handleProtectTrees(item);
    } else {
      setIsPopupOpen(true);
    }
  }

  function handleCloseModal() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    if (!isPopupOpen) return;

    const handleEscPress = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    function handleOverlayClick(evt) {
      if (evt.target.classList.contains("modal_opened")) {
        handleCloseModal();
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
      className={`board__tile ${lastRow === "true" ? "board__empty-cell" : ""}`}
    >
      <h3 className="board-tile__name">{title}</h3>
      {/* <p className="board-tile__type">{item?.name}</p> */}

      {item ? (
        <button onClick={buttonClicked} className="board-tile__button">
          <img
            className="board-tile__image"
            src={item?.image}
            alt={item?.name}
          />
        </button>
      ) : (
        ""
      )}
      {isPopupOpen ? (
        <InformationPopup
          name={item.name}
          image={item.image}
          description={item.description}
          handleCloseModal={handleCloseModal}
          isPopupOpen={isPopupOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default BoardTile;
