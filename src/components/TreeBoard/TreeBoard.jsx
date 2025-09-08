import Board from "../Board/Board";

function TreeBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {

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
          initialTrees={99}
          initialFires={1}
          title={"Tree Board"}
        />
      </section>
    </div>
  );
}

export default TreeBoard;
