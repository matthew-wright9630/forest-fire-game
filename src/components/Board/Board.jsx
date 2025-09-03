import { useState } from "react";

import "../BoardTile/BoardTile";
import BoardTile from "../BoardTile/BoardTile";
import "./Board.css";
import treeImage from "../../assets/Tree.png";
import fireImage from "../../assets/Fire.png";

function Board({ gameBoard, setGameBoard, gameStarted, setGameHasStarted }) {
  let numberOfTiles = 100;
  let numberOfTrees = 99;
  let numberOfFire = 1;

  let boardArray = new Array();

  function setUpBoard() {
    console.log("Set game has started");
    setGameHasStarted(true);
    randomizeBoard(numberOfTrees, numberOfFire);
    console.log("randomized board function has finished");
    setUpTile();
  }

  function setUpTile() {
    setGameBoard(boardArray);
  }

  function randomizeBoard(numberOfTrees, numberOfFire) {
    console.log("randomized board is starting");
    let selectedTileAmount = 0;
    while (selectedTileAmount < numberOfTiles) {
      const num = Math.floor(Math.random() * 50) + 1;
      if (num < 50 && numberOfTrees > 0) {
        numberOfTrees--;
        boardArray.push({ name: "Tree", image: treeImage });
        selectedTileAmount++;
      } else if (num === 50 && numberOfFire > 0) {
        numberOfFire--;
        boardArray.push({ name: "Fire", image: fireImage });
        selectedTileAmount++;
      }
    }
  }

  function endGame() {
    setGameHasStarted(false);
    boardArray = [];
    numberOfTiles = 100;
    numberOfTrees = 100;
    numberOfFire = 1;
  }

  // function generateTileType(overrideNum) {
  //   let num;
  //   if (overrideNum) {
  //     num = overrideNum;
  //   } else {
  //     num = Math.floor(Math.random() * 4) + 1;
  //   }
  //   if (num === 1) {
  //     return "tree";
  //   } else if (num === 2) {
  //     return "fire";
  //   } else if (num === 3) {
  //     return "house";
  //   } else {
  //     return "river";
  //   }
  // }

  function testButton() {
    console.log(gameBoard);
  }

  return (
    <div className="board">
      <button onClick={setUpBoard} className="board__start-btn">
        Start
      </button>
      <button onClick={testButton}>Test</button>
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
