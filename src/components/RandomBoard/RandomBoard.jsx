import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "../Board/Board";
import { Link } from "react-router-dom";

function RandomBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section className="random-board">
        <Board
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
          boardArray={boardArray}
          setBoardArray={setBoardArray}
        />
      </section>
      <Link className="main__link" to={"/forest-fire-game/"}>
        Return to the homepage
      </Link>
    </div>
  );
}

export default RandomBoard;
