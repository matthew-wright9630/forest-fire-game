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
import burningHouseImage from "../../assets/Burning-House.png";
import {
  getAdjacentIndices,
  getAdjacentOfDeadTrees,
} from "../../utils/tileArrayMapping";

function Board({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
  numberOfTrees,
  numberOfFire,
  numberOfDeadTrees,
  numberOfWater,
  numberOfHouses,
}) {
  const [houseIsBurning, setHouseIsBurning] = useState(false);

  function setUpBoard() {
    setGameHasStarted(true);
    randomizeBoard(
      numberOfTrees,
      numberOfFire,
      numberOfDeadTrees,
      numberOfWater,
      numberOfHouses
    );
  }

  function randomizeBoard(numberOfTrees, numberOfFire, numberOfDeadTrees) {
    let numberOfTiles = 100;
    let treesLeft = numberOfTrees;
    let fireLeft = numberOfFire;
    let deadTreesLeft = numberOfDeadTrees;
    let waterLeft = numberOfWater;
    let housesLeft = numberOfHouses;
    let selectedTileAmount = 0;
    let newBoardArray = new Array();
    while (selectedTileAmount < numberOfTiles) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (num < 35 && treesLeft > 0) {
        treesLeft--;
        newBoardArray.push({
          name: "Tree",
          image: treeImage,
        });
        selectedTileAmount++;
      } else if (num === 35 && fireLeft > 0) {
        fireLeft--;
        newBoardArray.push({
          name: "Fire",
          image: fireImage,
        });
        selectedTileAmount++;
      } else if (num > 35 && num <= 45 && deadTreesLeft > 0) {
        deadTreesLeft--;
        newBoardArray.push({
          name: "Dead Tree",
          image: deadTreeImage,
        });
        selectedTileAmount++;
      } else if (num < 60 && waterLeft > 0) {
        waterLeft--;
        newBoardArray.push({
          name: "Water",
          image: waterImage,
        });
        selectedTileAmount++;
      } else if (num === 60 && housesLeft > 0) {
        housesLeft--;
        newBoardArray.push({
          name: "House",
          image: houseImage,
        });
        selectedTileAmount++;
      }
    }
    setBoardArray(newBoardArray);
  }

  function endGame() {
    setGameHasStarted(false);
    setHouseIsBurning(false);
    setBoardArray([]);
  }

  function nextButton() {
    let adjacentTiles = new Array();
    boardArray.map((tile, index) => {
        const neighbors = getAdjacentIndices(index, tile.name);
        adjacentTiles.push(...neighbors);
    });
    spreadFire(adjacentTiles);
  }

  function spreadFire(indices) {
    let newArray = new Array();
    let treeShouldBurn;
    for (let i = 0; i < 100; i++) {
      treeShouldBurn = false;
      for (let m = 0; m < indices.length; m++) {
        if (indices[m] === i && boardArray[i].name !== "Water") {
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
          });
        } else if (
          boardArray[i].name === "House" ||
          boardArray[i].name === "Burning House"
        ) {
          setHouseIsBurning(true);
          newArray.push({
            name: "Burning House",
            image: burningHouseImage,
          });
        } else {
          newArray.push({
            name: "Fire",
            image: fireImage,
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

  return (
    <div className="board">
      <button onClick={setUpBoard} className="board__start-btn">
        Start
      </button>
      {!houseIsBurning ? <button onClick={nextButton}>Next</button> : ""}
      {gameStarted ? (
        <div>
          <button onClick={endGame} className="board__end-btn">
            End
          </button>
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
                return <BoardTile gridRow={index} key={index} item={item} />;
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
  );
}

export default Board;
