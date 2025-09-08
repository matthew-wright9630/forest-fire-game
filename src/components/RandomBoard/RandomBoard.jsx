import "../RandomBoard/RandomBoard.css";
import Board from "../Board/Board";

function RandomBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {
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
          numberOfFire={2}
          numberOfTrees={76}
          numberOfDeadTrees={8}
          numberOfWater={12}
          numberOfHouses={1}
          windDirection={4}
          numberOfFireFighter={1}
          title={"Random Board"}
        />
      </section>
    </div>
  );
}

export default RandomBoard;
