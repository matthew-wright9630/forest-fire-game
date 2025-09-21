import { useEffect, useState } from "react";
import "./UpdateGameModal.css";

function UpdateGameModal({
  isGameUpdateModalOpen,
  handleCloseModal,
  numberOfTrees,
  setNumberOfTrees,
  numberOfFires,
  setNumberOfFires,
  setOriginalFires,
  numberOfDeadTrees,
  setNumberOfDeadTrees,
  numberOfWater,
  setNumberOfWaters,
  numberOfHouses,
  setNumberOfHouses,
  numberOfFireFighter,
  setNumberOfFireFighters,
  setOriginalFireFighters,
  windDirection,
  setWindDirection,
}) {
  const [error, setError] = useState({});
  const [windDirectionError, setWindDirectionError] = useState({});
  const [isError, setIsError] = useState(false);
  const [trees, setTrees] = useState(numberOfTrees);
  const [fires, setFires] = useState(numberOfFires);
  const [deadTrees, setDeadTrees] = useState(numberOfDeadTrees);
  const [waters, setWaters] = useState(numberOfWater);
  const [houses, setHouses] = useState(numberOfHouses);
  const [fireFighters, setFireFighters] = useState(numberOfFireFighter);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = Number(target.value);
    if (target.name === "trees") {
      setTrees(value);
    } else if (name === "fires") {
      setFires(value);
    } else if (name === "dead trees") {
      setDeadTrees(value);
    } else if (name === "waters") {
      setWaters(value);
    } else if (name === "houses") {
      setHouses(value);
    } else if (name === "fire fighters") {
      setFireFighters(value);
    } else if (name === "wind direction") {
      console.log(value, Number.isnumber(value));
      if (value < 0 || value > 8) {
        setIsError(true);
        setWindDirectionError({
          name: "Number outside of range",
          message: "Number must be bewteen 0 and 8.",
        });
      } else if (!Number.isnumber(value)) {
        setIsError(true);
        setWindDirectionError({
          name: "Number is not an number",
          message: "Number must be an number",
        });
      } else {
        setWindDirectionError({});
        setIsError(false);
      }
      setWindDirection(value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setNumberOfTrees(trees);
    setNumberOfFires(fires);
    setOriginalFires(fires);
    setNumberOfDeadTrees(deadTrees);
    setNumberOfWaters(waters);
    setNumberOfHouses(houses);
    setNumberOfFireFighters(fireFighters);
    setOriginalFireFighters(fireFighters);
    handleCloseModal();
  };

  useEffect(() => {
    if (!isGameUpdateModalOpen) return;

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
  }, [isGameUpdateModalOpen]);

  useEffect(() => {
    if (
      Number(trees) +
        Number(fires) +
        Number(deadTrees) +
        Number(waters) +
        Number(houses) +
        Number(fireFighters) >
      100
    ) {
      setError({
        name: "Too many tiles",
        message: `There ${
          trees + fires + deadTrees + waters + houses + fireFighters
        } items selected. Please remove some items until there are 100`,
      });
      setIsError(true);
    } else if (
      Number(trees) +
        Number(fires) +
        Number(deadTrees) +
        Number(waters) +
        Number(houses) +
        Number(fireFighters) <
      100
    ) {
      setError({
        name: "Too few tiles",
        message: `There ${
          trees + fires + deadTrees + waters + houses + fireFighters
        } items selected. Please add some items until there are 100`,
      });
      setIsError(true);
    } else {
      setError({});
      setIsError(false);
    }
  }, [trees, fires, deadTrees, waters, houses, fireFighters]);

  return (
    <div className={`modal ${isGameUpdateModalOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">Update Game Board</h2>
        <p className="modal__description">Select the number of game pieces for each type. There must be a total of 100 game pieces.</p>
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close-button"
        />
        <form onSubmit={handleSubmit} className="modal__form">
          <label className="modal__label">
            Initial number of trees
            <input
              onChange={handleChange}
              type="number"
              className="modal__input"
              name="trees"
              id="trees"
              placeholder={trees}
              value={trees || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of fires. There must be at least 1 fire.
            <input
              onChange={handleChange}
              type="number"
              className="modal__input"
              name="fires"
              id="fires"
              placeholder={fires}
              min={1}
              value={fires || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of dead trees
            <input
              onChange={handleChange}
              type="number"
              className="modal__input"
              name="dead trees"
              id="dead trees"
              placeholder={deadTrees}
              value={deadTrees || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of waters
            <input
              onChange={handleChange}
              type="number"
              className="modal__input"
              name="waters"
              id="waters"
              placeholder={waters}
              value={waters || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of houses
            <input
              onChange={handleChange}
              type="number"
              className="modal__input"
              name="houses"
              id="houses"
              placeholder={houses}
              value={houses || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of fire fighter
            <input
              onChange={handleChange}
              type="number"
              className="modal__input"
              name="fire fighters"
              id="fire fighters"
              placeholder={fireFighters}
              value={fireFighters || ""}
            />
          </label>
          <label className="modal__label">
            Current wind direction
            <input
              onChange={handleChange}
              type="number"
              className="modal__input"
              name="wind direction"
              id="wind direction"
              placeholder={windDirection}
              value={windDirection || ""}
              min={0}
              max={8}
              step={1}
            />
            <span className="modal__help-text">
              0 = no wind, 1 = North, 2 = Northeast, 3 = East, 4 = Southeast
            </span>
            <span className="modal__help-text">
              5 = South, 6 = Southwest, 7 = West, 8 = Northwest
            </span>
            <span className="modal__error">{windDirectionError.message}</span>
          </label>
          <span className="modal__error">{error.message}</span>
          <button
            type="submit"
            disabled={isError}
            className={`modal__submit-button`}
          >
            {"Submit"}
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default UpdateGameModal;
