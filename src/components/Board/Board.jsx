import { useEffect, useState } from "react";

import "../BoardTile/BoardTile";
import BoardTile from "../BoardTile/BoardTile";
import "./Board.css";
import treeImage from "../../assets/Tree.png";
import fireImage from "../../assets/Fire.png";

function Board({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {
  let numberOfTiles = 100;
  let numberOfTrees = 99;
  let numberOfFire = 1;

  function setUpBoard() {
    setGameHasStarted(true);
    randomizeBoard(numberOfTrees, numberOfFire);
    // setTimeout(() => {
    //   console.log(boardArray);
    // }, 1000);
    // console.log(boardArray);
    // setUpTile();
  }

  function setUpTile() {
    setGameBoard(boardArray);
  }

  function randomizeBoard(numberOfTrees, numberOfFire) {
    let selectedTileAmount = 0;
    let newBoardArray = new Array();
    while (selectedTileAmount < numberOfTiles) {
      const num = Math.floor(Math.random() * 35) + 1;
      if (num < 35 && numberOfTrees > 0) {
        numberOfTrees--;
        // setBoardArray([...boardArray, { name: "Tree", image: treeImage }]);
        newBoardArray.push({
          name: "Tree",
          image: treeImage,
          key: newBoardArray.length - 1,
        });
        selectedTileAmount++;
      } else if (num === 35 && numberOfFire > 0) {
        numberOfFire--;
        // setBoardArray([...boardArray, { name: "Fire", image: fireImage }]);
        newBoardArray.push({
          name: "Fire",
          image: fireImage,
          key: newBoardArray.length - 1,
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

  // function testButton() {
  //   console.log(gameBoard);
  // }

  function nextButton() {
    console.log("This will eventually move to the next round");
    boardArray.map((tile, index) => {
      if (tile.name === "Fire") {
        console.log(tile, tile.key);
      }
    });
  }

  useEffect(() => {
    console.log("board array has been changed.", boardArray);
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
