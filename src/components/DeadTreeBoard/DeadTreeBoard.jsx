import Board from "../Board/Board";

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
          title={"Dead Tree Board"}
        />
      </section>
    </div>
  );
}

export default DeadTreeBoard;
