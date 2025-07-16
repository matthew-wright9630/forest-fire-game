import { useState } from "react";

import "../BoardTile/BoardTile";
import BoardTile from "../BoardTile/BoardTile";
import "./Board.css";

function Board({ gameBoard, setGameBoard, gameStarted, setGameHasStarted }) {
  const numberOfTiles = 100;

  function setUpBoard() {
    console.log("button is clicked");
    setGameHasStarted(true);
    for (let i = 0; i < numberOfTiles; i++) {
      setUpTile(BoardTile);
    }
  }

  function setUpTile(tile, num) {
    setGameBoard((tiles) => {
      const updatedBoard = [...tiles, tile];
      return updatedBoard;
    });
  }

  function testButton() {
    console.log(gameBoard.id);
  }

  return (
    <div className="board">
      <button onClick={setUpBoard} className="board__start-btn">
        Start
      </button>
      <button onClick={testButton}>Test</button>
      {gameStarted ? (
        <div>
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
                return <BoardTile gridRow={index} key={index} />;
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
