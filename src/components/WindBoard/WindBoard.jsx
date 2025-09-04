import Board from "../Board/Board";
import { Link } from "react-router-dom";

function WindBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {
  return (
    <div>
      <section className="wind-board">
        <Board
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
          boardArray={boardArray}
          setBoardArray={setBoardArray}
          numberOfFire={2}
          numberOfTrees={77}
          numberOfDeadTrees={8}
          numberOfWater={12}
          numberOfHouses={1}
          windDirection={4}
        />
      </section>
      <Link className="main__link" to={"/forest-fire-game/"}>
        Return to the homepage
      </Link>
    </div>
  );
}

export default WindBoard;
