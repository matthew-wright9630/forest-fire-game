import { useEffect, useState } from "react";

import "../BoardTile/BoardTile";
import BoardTile from "../BoardTile/BoardTile";
import "./Board.css";
import treeImage from "../../assets/Tree.png";
import fireImage from "../../assets/Fire.png";
import deadTreeImage from "../../assets/Dead_Tree.png";
import deadTreeFireImage from "../../assets/Fire_Dead_Tree.png";
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
  name,
}) {
  function setUpBoard() {
    setGameHasStarted(true);
    randomizeBoard(numberOfTrees, numberOfFire, numberOfDeadTrees);
  }

  function randomizeBoard(numberOfTrees, numberOfFire, numberOfDeadTrees) {
    let numberOfTiles = 100;
    let treesLeft = numberOfTrees;
    let fireLeft = numberOfFire;
    let deadTreesLeft = numberOfDeadTrees;
    let selectedTileAmount = 0;
    let newBoardArray = new Array();
    while (selectedTileAmount < numberOfTiles) {
      const num = Math.floor(Math.random() * 45) + 1;
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
      } else if (num > 35 && deadTreesLeft > 0) {
        deadTreesLeft--;
        newBoardArray.push({
          name: "Dead Tree",
          image: deadTreeImage,
        });
        selectedTileAmount++;
      }
    }
    setBoardArray(newBoardArray);
  }

  function endGame() {
    console.log("Game has ended.");
    setGameHasStarted(false);
    setBoardArray([]);
  }

  function nextButton() {
    let adjacentTiles = new Array();
    boardArray.map((tile, index) => {
      if (tile.name === "Fire") {
        const neighbors = getAdjacentIndices(index);
        adjacentTiles.push(...neighbors);
      }
      if (tile.name === "Dead Tree Fire") {
        const neighbors = getAdjacentOfDeadTrees(index);
        adjacentTiles.push(...neighbors);
      }
    });
    console.log(adjacentTiles, "Adjacent Tiles");
    spreadFire(adjacentTiles);
  }

  function spreadFire(indices) {
    let newArray = new Array();
    let treeShouldBurn;
    for (let i = 0; i < 100; i++) {
      treeShouldBurn = false;
      for (let m = 0; m < indices.length; m++) {
        if (indices[m] === i) {
          treeShouldBurn = true;
        }
      }
      if (i === 67) {
        console.log(treeShouldBurn, "This tree should burn");
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
      <button onClick={nextButton}>Next</button>
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
