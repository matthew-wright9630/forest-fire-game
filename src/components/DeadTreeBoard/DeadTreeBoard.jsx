import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "../Board/Board";
import { Link } from "react-router-dom";

function DeadTreeBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {
  return (
    <div>
      <section className="dead-tree-board">
        <Board
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
          boardArray={boardArray}
          setBoardArray={setBoardArray}
          numberOfFire={1}
          numberOfTrees={91}
          numberOfDeadTrees={8}
        />
      </section>
      <Link className="main__link" to={"/forest-fire-game/"}>
        Return to the homepage
      </Link>
    </div>
  );
}

export default DeadTreeBoard;
