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
          numberOfFire={2}
          numberOfTrees={77}
          numberOfDeadTrees={8}
          numberOfWater={12}
          numberOfHouses={1}
          windDirection={4}
          title={"Wind Board"}
        />
      </section>
    </div>
  );
}

export default WindBoard;
