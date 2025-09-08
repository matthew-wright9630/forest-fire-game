import Board from "../Board/Board";

function FireFighterBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {
  return (
    <div>
      <section className="fire-fighter-board">
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
          title={"Fire Fighter Board"}
        />
      </section>
    </div>
  );
}

export default FireFighterBoard;
