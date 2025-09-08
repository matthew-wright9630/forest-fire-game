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
          initialFires={2}
          initialTrees={76}
          initialDeadTrees={8}
          initialWaters={12}
          initialHouses={1}
          windDirection={4}
          initialFireFighters={1}
          title={"Random Board"}
        />
      </section>
    </div>
  );
}

export default RandomBoard;
