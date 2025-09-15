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
import burningHouseImage from "../../assets/Burning-House.png";
import protectedTreeImage from "../../assets/Protected_Tree.png";
import fireFighterImage from "../../assets/Fire_Fighter.png";
import {
  determineArrowDirection,
  getAdjacentIndices,
  getProtectedTrees,
} from "../../utils/tileArrayMapping";
import Footer from "../NavigateToHomepage/NavigateToHomepage";
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
  wind = 0,
  initialFireFighters = 0,
  title,
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
  const [windDirection, setWindDirection] = useState(wind);
  const [originalFires, setOriginalFies] = useState(initialFires);
  const [firesPresent, setFiresPresent] = useState(true);

  function setUpBoard() {
    setGameHasStarted(true);
    if (windDirection) {
      setArrowDirection(determineArrowDirection(windDirection));
    }
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
    console.log(item);
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
    let numberOfTiles = 100;
    let treesLeft = numberOfTrees + numberOfFireFighter + numberOfFires;
    let fireLeft = numberOfFires;
    let deadTreesLeft = numberOfDeadTrees;
    let waterLeft = numberOfWater;
    let housesLeft = numberOfHouses;
    let selectedTileAmount = 0;
    let newBoardArray = new Array();
    let numberOfIterations = 0;
    while (selectedTileAmount < numberOfTiles) {
      numberOfIterations++;
      if (numberOfIterations > 10000) {
        break;
      }
      const num = Math.floor(Math.random() * 60) + 1;
      if (num < 30 && treesLeft > 0) {
        treesLeft--;
        newBoardArray.push({
          name: "Tree",
          image: treeImage,
          description:
            "One part of a forest. When burned, it will burn in all eight directions around it.",
          index: selectedTileAmount,
        });
        selectedTileAmount++;
        // } else if (num === 35 && fireLeft > 0) {
        //   fireLeft--;
        //   newBoardArray.push({
        //     name: "Fire",
        //     image: fireImage,
        //     description:
        //       "Burns trees and other fuel. Normally burns in all eight directions around it.",
        //     index: selectedTileAmount,
        //   });
        // selectedTileAmount++;
      } else if (num > 30 && num <= 45 && deadTreesLeft > 0) {
        deadTreesLeft--;
        newBoardArray.push({
          name: "Dead Tree",
          image: deadTreeImage,
          description:
            "These squares are volatile. They burn two squares on each flat side and one diagonally.",
          index: selectedTileAmount,
        });
        selectedTileAmount++;
      } else if (num < 60 && waterLeft > 0) {
        waterLeft--;
        newBoardArray.push({
          name: "Water",
          image: waterImage,
          description: "Squares with water will not burn.",
          index: selectedTileAmount,
        });
        selectedTileAmount++;
      } else if (num === 60 && housesLeft > 0) {
        housesLeft--;
        newBoardArray.push({
          name: "House",
          image: houseImage,
          description: "The house burns like a tree. You want to protect this.",
          index: selectedTileAmount,
        });
        selectedTileAmount++;
      }
    }
    setBoardArray(newBoardArray);
  }

  function checkFireFighters() {
    if (numberOfFireFighter === 0) {
      setFireFighterPresent(false);
    } else {
      setFireFighterPresent(true);
    }
  }

  function addFireFighter(item) {
    const fireFighterObject = {
      name: "Fire Fighter",
      image: fireFighterImage,
      description:
        "The Fire Fighter will protect their square and the four squares directly to each side of the fire fighter.",
    };
    if (
      numberOfFireFighter > 0 &&
      (item.name === "Tree" || item.name === "Dead Tree")
    ) {
      overrideBoard(item, fireFighterObject);
      setNumberOfFireFighters(numberOfFireFighter - 1);
    }
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
    }
  }

  function protectTrees() {
    let adjacentTiles = new Array();
    boardArray.map((tile, index) => {
      if (tile.name === "Fire Fighter") {
        const neighbors = getProtectedTrees(index);
        adjacentTiles.push(...neighbors);
      }
    });
    let newArray = new Array();
    let treeIsProtected;
    for (let i = 0; i < 100; i++) {
      treeIsProtected = false;
      for (let m = 0; m < adjacentTiles.length; m++) {
        if (
          adjacentTiles[m] === i &&
          (boardArray[i].name === "Tree" || boardArray[i].name === "Dead Tree")
        ) {
          treeIsProtected = true;
        }
      }
      if (treeIsProtected === true) {
        newArray.push({
          name: "Protected Tree",
          image: protectedTreeImage,
          description: "This tree is protected and cannot be burned.",
          index: i,
        });
      } else {
        newArray.push(boardArray[i]);
      }
    }
    setBoardArray(newArray);
  }

  function endGame() {
    setGameHasStarted(false);
    setHouseIsBurning(false);
    setRoundHasStarted(false);
    setFireFighterPresent(false);
    setNumberOfFireFighters(originalFireFighters);
    setNumberOfFires(originalFires);
    setArrowDirection({});
    setBoardArray([]);
  }

  function nextButton() {
    if (roundNumber === 0 && originalFireFighters) {
      protectTrees();
      setRoundNumber(roundNumber + 1);
    } else if (firesPresent) {
      addFires();
      checkFires();
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

  return (
    <div className="board">
      <h2 className="board__header">Welcome to the {title}!</h2>
      <div className="board__game-area">
        <div
          className={`board__button-area ${
            gameStarted ? "board__button-area_small" : ""
          }`}
        >
          <div className={`board__buttons`}>
            {!roundHasStarted ? (
              <>
                <button
                  onClick={setUpBoard}
                  className={`board__button board__start-btn ${
                    !gameStarted ? "board__button_large" : ""
                  }`}
                >
                  Start Game
                </button>
                <button
                  onClick={updateBoard}
                  className={`board__button board__update-btn ${
                    !gameStarted ? "board__button_large" : ""
                  }`}
                >
                  Update Board Conditions
                </button>
              </>
            ) : (
              <>
                {windDirection ? (
                  <div className="board__wind">
                    {/* <img className="board__compass" src={compassImage}></img> */}
                    <p className="board__wind__description">
                      Wind direction: {arrowDirection.name}
                    </p>
                    <img
                      src={arrowDirection.image}
                      alt={arrowDirection.name}
                      className="board__wind__direction"
                    />
                  </div>
                ) : (
                  ""
                )}
                {fireFighterPresent ? (
                  <div className="board__firefighter">
                    <img
                      src={fireFighterImage}
                      alt="Fire Fighter"
                      className="board__firefighter__image"
                    />
                    <p className="board__firefighter__description">
                      Number of fire fighters left to place:{" "}
                      {numberOfFireFighter}
                    </p>
                  </div>
                ) : houseIsBurning ? (
                  <div className="board__game-end">House has been burned</div>
                ) : (
                  <button
                    onClick={nextButton}
                    className="board__button board__next-btn"
                  >
                    Next
                  </button>
                )}
              </>
            )}
            {gameStarted ? (
              <button
                onClick={endGame}
                className="board__button board__end-btn"
              >
                End
              </button>
            ) : (
              ""
            )}
            <NavigateToHomepage endGame={endGame} gameStarted={gameStarted} />
          </div>
        </div>
        {gameStarted ? (
          <div className="board__started">
            <div className="board__grid">
              <div className="board__first-column_background">
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
                      setNumberOfFireFighters={setNumberOfFireFighters}
                      handleAddFireFighter={addFireFighter}
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
        numberOfDeadTrees={numberOfDeadTrees}
        setNumberOfDeadTrees={setNumberOfDeadTrees}
        numberOfWater={numberOfWater}
        setNumberOfWaters={setNumberOfWaters}
        numberOfHouses={numberOfHouses}
        setNumberOfHouses={setNumberOfHouses}
        numberOfFireFighter={numberOfFireFighter}
        setNumberOfFireFighters={setNumberOfFireFighters}
        setOriginalFireFighters={setOriginalFireFighters}
        windDirection={windDirection}
        setWindDirection={setWindDirection}
      />
    </div>
  );
}

export default Board;
