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
  const handleChange = (event) => {
    console.log(event.target.value);
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (target.name === "trees") {
      setNumberOfTrees(target.value);
    } else if (target.name === "fires") {
      setNumberOfFires(target.value);
    } else if (target.name === "dead trees") {
      setNumberOfDeadTrees(target.value);
    } else if (target.name === "waters") {
      setNumberOfWaters(target.value);
    } else if (target.name === "houses") {
      setNumberOfHouses(target.value);
    } else if (target.name === "fire fighters") {
      setNumberOfFireFighters(target.value);
    }
    // setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: target.validationMessage });
    // setIsValid(target.closest("form").checkValidity());
  };

  return (
    // <div className="update-game-modal">{isGameUpdateModalOpen ? <div className="update-game-modal">Test</div> : ""}
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              className="modal__input"
              name="fire fighter"
              id="fire fighter"
              placeholder={numberOfFireFighter}
              value={numberOfFireFighter || ""}
            />
          </label>
          {/* <span className="modal__error">{errors.email}</span> */}
          <button
            type="submit"
            // disabled={isDisabled}
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
