import Board from "../Board/Board";

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
          initialFires={2}
          initialTrees={77}
          initialDeadTrees={8}
          initialWaters={12}
          initialHouses={1}
          wind={4}
          title={"Wind Board"}
        />
      </section>
    </div>
  );
}

export default WindBoard;
