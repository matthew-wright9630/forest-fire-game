import { useState } from "react";
import "./BoardTile.css";
import InformationPopup from "../InformationPopup/InformationPopup";

function BoardTile({
  title = "",
  gridRow,
  lastRow = "false",
  item,
  fireFighterPresent,
  handleAddFireFighter,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function buttonClicked() {
    if (fireFighterPresent) {
      handleAddFireFighter(item);
    } else {
      setIsPopupOpen(true);
    }
  }

  function handleCloseModal() {
    setIsPopupOpen(false);
  }

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
