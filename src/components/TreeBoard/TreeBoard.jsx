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
          numberOfTrees={99}
          numberOfFire={1}
          title={"Tree Board"}
        />
      </section>
    </div>
  );
}

export default TreeBoard;
