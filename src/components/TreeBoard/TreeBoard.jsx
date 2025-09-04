import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "../Board/Board";
import { Link } from "react-router-dom";

function TreeBoard({
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
      <section className="tree-board">
        <Board
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
          boardArray={boardArray}
          setBoardArray={setBoardArray}
          numberOfTrees={99}
          numberOfFire={1}
        />
      </section>
      <Link className="main__link" to={"/forest-fire-game/"}>
        Return to the homepage
      </Link>
    </div>
  );
}

export default TreeBoard;
