import { useEffect, useState } from "react";
import "./UpdateGameModal.css";

function UpdateGameModal({
  isGameUpdateModalOpen,
  handleCloseModal,
  handleSubmit,
  numberOfTrees,
  setNumberOfTrees,
  numberOfFires,
  setNumberOfFires,
  numberOfDeadTrees,
  setNumberOfDeadTrees,
  numberOfWater,
  setNumberOfWaters,
  numberOfHouses,
  setNumberOfHouses,
  numberOfFireFighter,
  setNumberOfFireFighters,
}) {
  const [error, setError] = useState({});
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = Number(target.value);
    if (target.name === "trees") {
      setNumberOfTrees(value);
    } else if (name === "fires") {
      setNumberOfFires(value);
    } else if (name === "dead trees") {
      setNumberOfDeadTrees(value);
    } else if (name === "waters") {
      setNumberOfWaters(value);
    } else if (name === "houses") {
      setNumberOfHouses(value);
    } else if (name === "fire fighters") {
      setNumberOfFireFighters(value);
    }
  };

  useEffect(() => {
    if (
      Number(numberOfTrees) +
        Number(numberOfFires) +
        Number(numberOfDeadTrees) +
        Number(numberOfWater) +
        Number(numberOfHouses) +
        Number(numberOfFireFighter) >
      100
    ) {
      setError({
        name: "Too many tiles",
        message: `There ${
          numberOfTrees +
          numberOfFires +
          numberOfDeadTrees +
          numberOfWater +
          numberOfHouses +
          numberOfFireFighter
        } items selected. Please remove some items until there are 100`,
      });
      setIsError(true);
    } else if (
      Number(numberOfTrees) +
        Number(numberOfFires) +
        Number(numberOfDeadTrees) +
        Number(numberOfWater) +
        Number(numberOfHouses) +
        Number(numberOfFireFighter) <
      100
    ) {
      setError({
        name: "Too few tiles",
        message: `There ${
          numberOfTrees +
          numberOfFires +
          numberOfDeadTrees +
          numberOfWater +
          numberOfHouses +
          numberOfFireFighter
        } items selected. Please add some items until there are 100`,
      });
      setIsError(true);
    } else {
      setError({});
      setIsError(false);
    }
  }, [
    numberOfTrees,
    numberOfFires,
    numberOfDeadTrees,
    numberOfWater,
    numberOfHouses,
    numberOfFireFighter,
  ]);

  return (
    <div className={`modal ${isGameUpdateModalOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">Update Game Board</h2>
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
              type="integer"
              className="modal__input"
              name="trees"
              id="trees"
              placeholder={numberOfTrees}
              value={numberOfTrees || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of fires
            <input
              onChange={handleChange}
              type="integer"
              className="modal__input"
              name="fires"
              id="fires"
              placeholder={numberOfFires}
              value={numberOfFires || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of dead trees
            <input
              onChange={handleChange}
              type="integer"
              className="modal__input"
              name="dead trees"
              id="dead trees"
              placeholder={numberOfDeadTrees}
              value={numberOfDeadTrees || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of waters
            <input
              onChange={handleChange}
              type="integer"
              className="modal__input"
              name="waters"
              id="waters"
              placeholder={numberOfWater}
              value={numberOfWater || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of houses
            <input
              onChange={handleChange}
              type="integer"
              className="modal__input"
              name="houses"
              id="houses"
              placeholder={numberOfHouses}
              value={numberOfHouses || ""}
            />
          </label>
          <label className="modal__label">
            Initial number of fire fighter
            <input
              onChange={handleChange}
              type="integer"
              className="modal__input"
              name="fire fighters"
              id="fire fighters"
              placeholder={numberOfFireFighter}
              value={numberOfFireFighter || ""}
            />
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
