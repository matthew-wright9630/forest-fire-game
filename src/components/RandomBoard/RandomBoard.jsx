import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "../Board/Board";

function RandomBoard({ gameBoard, setGameBoard, gameStarted, setGameHasStarted }) {
  const [count, setCount] = useState(0);

  return (
      <section className="random-board">
        <Board
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
        />
      </section>
  );
}

export default RandomBoard;