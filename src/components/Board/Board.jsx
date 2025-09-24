import { useEffect, useState } from "react";

import "../BoardTile/BoardTile";
import BoardTile from "../BoardTile/BoardTile";
import "./Board.css";
import treeImage from "../../assets/Tree.png";
import fireImage from "../../assets/Fire.png";
import deadTreeImage from "../../assets/Dead_Tree.png";
import deadTreeFireImage from "../../assets/Fire_Dead_Tree.png";
import waterImage from "../../assets/Water.png";
import houseImage from "../../assets/House.png";
import compassImage from "../../assets/Compass.png";
import compassArrow from "../../assets/Compass-Arrow-Solid.png";
import burningHouseImage from "../../assets/Burning-House.png";
import protectedTreeImage from "../../assets/Protected_Tree.png";
import fireFighterImage from "../../assets/Fire_Fighter.png";
import {
  determineArrowDirection,
  getAdjacentIndices,
  getProtectedTrees,
} from "../../utils/tileArrayMapping";
import UpdateGameModal from "../UpdateGameModal/UpdateGameModal";
import NavigateToHomepage from "../NavigateToHomepage/NavigateToHomepage";

function Board({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
  initialTrees = 0,
  initialFires = 0,
  initialDeadTrees = 0,
  initialWaters = 0,
  initialHouses = 0,
  windIsInEffect = false,
  initialFireFighters = 0,
  title,
  boardDescription,
  handleInstructionButtonClicked,
  handleHowToPlayButtonClicked,
  gameCanBeUpdated = false,
}) {
  const [houseIsBurning, setHouseIsBurning] = useState(false);
  const [arrowDirection, setArrowDirection] = useState({});
  const [roundNumber, setRoundNumber] = useState(0);
  const [roundHasStarted, setRoundHasStarted] = useState(false);
  const [isGameUpdateModalOpen, setIsGameUpdateModalOpen] = useState(false);
  const [numberOfTrees, setNumberOfTrees] = useState(initialTrees);
  const [numberOfFires, setNumberOfFires] = useState(initialFires);
  const [numberOfDeadTrees, setNumberOfDeadTrees] = useState(initialDeadTrees);
  const [numberOfWater, setNumberOfWaters] = useState(initialWaters);
  const [numberOfHouses, setNumberOfHouses] = useState(initialHouses);
  const [numberOfFireFighter, setNumberOfFireFighters] =
    useState(initialFireFighters);
  const [fireFighterPresent, setFireFighterPresent] = useState(false);
  const [originalFireFighters, setOriginalFireFighters] =
    useState(initialFireFighters);
  const [numberOfTreesToProtect, setNumberOfTreesToProtect] = useState(0);
  const [windDirection, setWindDirection] = useState(0);
  const [originalFires, setOriginalFires] = useState(initialFires);
  const [firesPresent, setFiresPresent] = useState(true);
  const [forestIsProtected, setForestIsProtected] = useState(true);
  const [arrowDirectionIsSet, setArrowDirectionIsSet] = useState(false);
  const [processing, setProcessing] = useState(false);

  function setUpBoard() {
    setGameHasStarted(true);
    if (windIsInEffect) {
      randomizeWind();
    }
    setNumberOfTreesToProtect(numberOfFireFighter * 4);
    setRoundHasStarted(true);
    randomizeBoard();
    checkFireFighters();
    checkFires();
    setRoundNumber(0);
  }

  function updateBoard() {
    if (isGameUpdateModalOpen) {
      setIsGameUpdateModalOpen(false);
    } else {
      setIsGameUpdateModalOpen(true);
    }
  }

  const handleCloseModal = () => {
    setIsGameUpdateModalOpen(false);
  };

  function overrideBoard(item, obj) {
    setBoardArray((prevBoard) =>
      prevBoard.map((tile, i) => {
        if (i === item.index) {
          return obj;
        }
        return tile;
      })
    );
  }

  function randomizeBoard() {
    let tiles = [];
    for (
      let i = 0;
      i < numberOfTrees + numberOfFireFighter + numberOfFires;
      i++
    ) {
      tiles.push({
        name: "Tree",
        image: treeImage,
        description:
          "One part of a forest. When burned, it will burn in all eight directions around it.",
      });
    }

    for (let i = 0; i < numberOfDeadTrees; i++) {
      tiles.push({
        name: "Dead Tree",
        image: deadTreeImage,
        description:
          "These squares are volatile. They burn two squares on each flat side and one diagonally.",
      });
    }

    for (let i = 0; i < numberOfWater; i++) {
      tiles.push({
        name: "Water",
        image: waterImage,
        description: "Squares with water will not burn.",
      });
    }

    for (let i = 0; i < numberOfHouses; i++) {
      tiles.push({
        name: "House",
        image: houseImage,
        description: "The house burns like a tree. You want to protect this.",
      });
    }
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    tiles = tiles.map((tile, idx) => ({
      ...tile,
      index: idx,
    }));
    setBoardArray(tiles);
  }

  function randomizeWind() {
    const num = Math.floor(Math.random() * 9);
    setWindDirection(num);
  }

  function animateArrowDirection(windDirection) {
    const elementToRotate = document.querySelector(".board__compass-arrow");
    let degRotated = 360 * 5 + windDirection * 45 - 45;
    if (window.matchMedia("(max-width: 650px)").matches) {
      if (windDirection === 2 || windDirection === 6) {
        degRotated -= 12;
      }
      if (windDirection === 4 || windDirection === 8) {
        degRotated += 12;
      }
    }
    const animation = elementToRotate.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: `rotate(${degRotated}deg)` },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "linear",
        fill: "forwards",
      }
    );
    animation.finished.then(() => {
      setTimeout(() => {
        setProcessing(false);
      }, 1000);
    });
  }

  function arrowDirectionButtonClicked() {
    setProcessing(true);
    setArrowDirectionIsSet(true);
    setTimeout(() => {
      animateArrowDirection(windDirection);
    }, 500);
  }

  function checkFireFighters() {
    if (numberOfFireFighter === 0) {
      setFireFighterPresent(false);
    } else {
      setFireFighterPresent(true);
      setForestIsProtected(false);
    }
  }

  function addFireFighter(item) {
    if (
      numberOfFireFighter > 0 &&
      (item.name === "Tree" || item.name === "Dead Tree")
    ) {
      const fireFighterObject = {
        name: "Fire Fighter",
        image: fireFighterImage,
        description:
          "The Fire Fighter will protect their square and the four squares directly to each side of the fire fighter.",
        index: item.index,
      };
      overrideBoard(item, fireFighterObject);
      setNumberOfFireFighters(numberOfFireFighter - 1);
    }
  }

  function protectForest(item) {
    if (item.name !== "Tree" && item.name !== "Dead Tree") {
      return;
    }
    let nextToFirefighter = false;
    const protectedTreeObject = {
      name: "Protected Tree",
      image: protectedTreeImage,
      description: "This tree is protected and cannot be burned.",
    };
    const neighbors = getAdjacentIndices(item.index, item.name, 0);

    for (let i = 0; i < neighbors.length; i++) {
      if (boardArray[neighbors[i]].name === "Fire Fighter") {
        nextToFirefighter = true;
      }
    }
    if (nextToFirefighter) {
      setNumberOfTreesToProtect(numberOfTreesToProtect - 1);
      overrideBoard(item, protectedTreeObject);
    }
  }

  function overrideForestProtection() {
    setNumberOfTreesToProtect(0);
  }

  function checkFires() {
    if (numberOfFires === 0) {
      setFiresPresent(false);
    } else {
      setFiresPresent(true);
    }
  }

  function addFires() {
    const fireObject = {
      name: "Fire",
      image: fireImage,
      description:
        "Burns trees and other fuel. Normally burns in all eight directions around it.",
    };
    const num = Math.floor(Math.random() * 60) + 1;
    if (
      numberOfFires > 0 &&
      (boardArray[num].name === "Tree" || boardArray[num].name === "Dead Tree")
    ) {
      overrideBoard(boardArray[num], fireObject);
      setNumberOfFires(numberOfFires - 1);
    } else {
      nextButton();
    }
  }

  function checkForestProtection() {
    if (numberOfTreesToProtect !== 0) {
      setForestIsProtected(false);
    } else {
      setForestIsProtected(true);
    }
  }

  function endGame() {
    setGameHasStarted(false);
    setHouseIsBurning(false);
    setRoundHasStarted(false);
    setFireFighterPresent(false);
    setNumberOfFireFighters(originalFireFighters);
    setNumberOfFires(originalFires);
    setNumberOfTreesToProtect(0);
    setForestIsProtected(true);
    setArrowDirectionIsSet(false);
    setArrowDirection({});
    setBoardArray([]);
  }

  function nextButton() {
    if (firesPresent) {
      addFires();
    } else {
      let adjacentTiles = new Array();
      boardArray.map((tile, index) => {
        if (tile.name === "Fire" || tile.name === "Dead Tree Fire") {
          const neighbors = getAdjacentIndices(index, tile.name, windDirection);
          adjacentTiles.push(...neighbors);
        }
      });
      spreadFire(adjacentTiles);
      setRoundNumber(roundNumber + 1);
    }
  }

  function spreadFire(indices) {
    let newArray = new Array();
    let treeShouldBurn;
    for (let i = 0; i < 100; i++) {
      treeShouldBurn = false;
      for (let m = 0; m < indices.length; m++) {
        if (
          indices[m] === i &&
          boardArray[i].name !== "Water" &&
          boardArray[i].name !== "Fire Fighter" &&
          boardArray[i].name !== "Protected Tree"
        ) {
          treeShouldBurn = true;
        }
      }
      if (treeShouldBurn === true) {
        if (
          boardArray[i].name === "Dead Tree" ||
          boardArray[i].name === "Dead Tree Fire"
        ) {
          newArray.push({
            name: "Dead Tree Fire",
            image: deadTreeFireImage,
            description:
              "These squares are volatile. They burn two squares on each flat side and one diagonally.",
            index: i,
          });
        } else if (
          boardArray[i].name === "House" ||
          boardArray[i].name === "Burning House"
        ) {
          setHouseIsBurning(true);
          newArray.push({
            name: "Burning House",
            image: burningHouseImage,
            description: "The house has burned, and the game is over now.",
            index: i,
          });
        } else {
          newArray.push({
            name: "Fire",
            image: fireImage,
            description:
              "Burns trees and other fuel. Normally burns in all eight directions around it.",
            index: i,
          });
        }
      } else {
        newArray.push(boardArray[i]);
      }
    }
    setBoardArray(newArray);
  }

  useEffect(() => {
    setGameBoard(boardArray);
  }, [boardArray]);

  useEffect(() => {
    checkFireFighters();
  }, [numberOfFireFighter]);

  useEffect(() => {
    checkFires();
  }, [numberOfFires]);

  useEffect(() => {
    checkForestProtection();
  }, [numberOfTreesToProtect]);

  useEffect(() => {
    setArrowDirection(determineArrowDirection(windDirection));
  }, [windDirection, processing]);

  return (
    <div className="board">
      <div className="board__compass-div">
        <img
          src={compassImage}
          alt="Compass"
          className={`board__compass ${
            arrowDirectionIsSet && processing ? "board__animation" : ""
          }`}
        />
        <img
          src={compassArrow}
          alt="Compass Arrow"
          className={`board__compass-arrow ${
            arrowDirectionIsSet && processing ? "board__animation" : ""
          }`}
        />
      </div>
      <div className="board__header">
        <h2 className="board__header-title">Welcome to the {title}!</h2>
        <div className="board__description-area">
          <p className="board__description">
            To see how to play, click{" "}
            <button
              onClick={handleHowToPlayButtonClicked}
              className="main__button"
            >
              here
            </button>
          </p>
          <p className="board__description">
            To see a description of the game elements, you can click{" "}
            <button
              onClick={handleInstructionButtonClicked}
              className="main__button"
            >
              here
            </button>
          </p>
          {boardDescription ? (
            <p className="board__description">{`New board rules: ${boardDescription}`}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`board__game-area`}>
        <div
          className={`board__button-area ${
            gameStarted ? "board__button-area_small" : ""
          }`}
        >
          <>
            {!roundHasStarted ? ( //Section contains the Start and Update Buttons (if applicable)
              <div className="board__start-buttons">
                <button
                  onClick={setUpBoard}
                  className={`board__button board__start-btn ${
                    !gameStarted ? "board__button_large" : ""
                  }`}
                >
                  Start Game
                </button>
                {gameCanBeUpdated ? (
                  <button
                    onClick={updateBoard}
                    className={`board__button board__update-btn ${
                      !gameStarted ? "board__button_large" : ""
                    }`}
                  >
                    Update Board Conditions
                  </button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              //This section contains all the game elements
              <div className="board__game-buttons">
                {windIsInEffect && arrowDirectionIsSet && !processing ? (
                  //Determines if the gameboard should display the wind image
                  <div className="board__wind ">
                    <p className="board__wind__description ">
                      Wind direction: {arrowDirection?.name}
                    </p>
                    <img
                      src={arrowDirection?.image}
                      alt={arrowDirection?.name}
                      style={{ transform: `rotate(${arrowDirection.rotation})` }}
                      className="board__wind__direction "
                    />
                  </div>
                ) : (
                  ""
                )}

                {windIsInEffect && !arrowDirectionIsSet ? (
                  //If wind is in effect and the wind direction is not displayed, the Determine Wind Button plays an animation and displays the direction of wind.
                  <button
                    onClick={arrowDirectionButtonClicked}
                    className="board__button board__animate-wind-btn"
                  >
                    Determine Wind Direction
                  </button>
                ) : fireFighterPresent && !processing ? (
                  //Determines if there are firefighters that need to be displayed.
                  <div className="board__firefighter ">
                    <img
                      src={fireFighterImage}
                      alt="Fire Fighter"
                      className="board__firefighter__image "
                    />
                    <p className="board__firefighter__description ">
                      Number of fire fighters left to place:{" "}
                      {numberOfFireFighter}
                    </p>
                  </div>
                ) : houseIsBurning ? (
                  //If the house is burning, the game stops. Otherwise, the Next button should appear.
                  <div className="board__game-end board__element">
                    House has been burned
                  </div>
                ) : (
                  <>
                    {processing ? (
                      //Protect Forest and Generate/Spread fire will not be displayed until processing is completed.
                      ""
                    ) : !forestIsProtected ? (
                      //If firefighters are present and the trees not protected, button will be displayed.
                      // <button
                      //   onClick={nextButton}
                      //   className="board__button board__next-btn"
                      // >
                      //   Protect Forest
                      // </button>
                      <div className="board__firefighter">
                        <img
                          src={fireFighterImage}
                          alt="Fire Fighter"
                          className="board__firefighter__image "
                        />
                        <p className="board__firefighter__description ">
                          Number of trees left to protect:{" "}
                          {numberOfTreesToProtect}
                        </p>
                        <button
                          onClick={overrideForestProtection}
                          className="board__button board__protection-btn"
                        >
                          No more trees to protect
                        </button>
                      </div>
                    ) : (
                      <button
                        //Displays the Generate Fire or Spread Fire, depending on if all fires are generated on the board.
                        onClick={nextButton}
                        className="board__button board__next-btn"
                      >
                        {firesPresent ? "Generate Fire" : "Spread Fire"}
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
            <div className="board__end-buttons">
              {gameStarted ? (
                <button
                  onClick={endGame}
                  className="board__button board__element board__end-btn"
                >
                  End
                </button>
              ) : (
                ""
              )}
              <NavigateToHomepage endGame={endGame} gameStarted={gameStarted} />
            </div>
          </>
        </div>
        {gameStarted ? (
          <div className="board__started">
            <div className="board__grid">
              <div className="board__first-column">
                <BoardTile title="10" gridRow="10" />
                <BoardTile title="9" gridRow="9" />
                <BoardTile title="8" gridRow="8" />
                <BoardTile title="7" gridRow="7" />
                <BoardTile title="6" gridRow="6" />
                <BoardTile title="5" gridRow="5" />
                <BoardTile title="4" gridRow="4" />
                <BoardTile title="3" gridRow="3" />
                <BoardTile title="2" gridRow="2" />
                <BoardTile title="1" gridRow="1" />
              </div>
              <div className="board__game-row">
                {gameBoard?.map((item, index) => {
                  return (
                    <BoardTile
                      gridRow={index}
                      key={index}
                      item={item}
                      fireFighterPresent={fireFighterPresent}
                      numberOfFireFighter={numberOfFireFighter}
                      forestIsProtected={forestIsProtected}
                      setNumberOfFireFighters={setNumberOfFireFighters}
                      handleAddFireFighter={addFireFighter}
                      handleProtectTrees={protectForest}
                    />
                  );
                })}
              </div>
            </div>
            <div className="board__last-row">
              <BoardTile lastRow="true" />
              <BoardTile title="A" />
              <BoardTile title="B" />
              <BoardTile title="C" />
              <BoardTile title="D" />
              <BoardTile title="E" />
              <BoardTile title="F" />
              <BoardTile title="G" />
              <BoardTile title="H" />
              <BoardTile title="I" />
              <BoardTile title="J" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <UpdateGameModal
        isGameUpdateModalOpen={isGameUpdateModalOpen}
        handleCloseModal={handleCloseModal}
        numberOfTrees={numberOfTrees}
        setNumberOfTrees={setNumberOfTrees}
        numberOfFires={numberOfFires}
        setNumberOfFires={setNumberOfFires}
        setOriginalFires={setOriginalFires}
        numberOfDeadTrees={numberOfDeadTrees}
        setNumberOfDeadTrees={setNumberOfDeadTrees}
        numberOfWater={numberOfWater}
        setNumberOfWaters={setNumberOfWaters}
        numberOfHouses={numberOfHouses}
        setNumberOfHouses={setNumberOfHouses}
        numberOfFireFighter={numberOfFireFighter}
        setNumberOfFireFighters={setNumberOfFireFighters}
        setOriginalFireFighters={setOriginalFireFighters}
      />
    </div>
  );
}

export default Board;
