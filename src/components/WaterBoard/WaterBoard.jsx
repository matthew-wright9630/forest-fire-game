import Board from "../Board/Board";

function WaterBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {
  return (
    <div>
      <section className="water-board">
        <Board
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
          boardArray={boardArray}
          setBoardArray={setBoardArray}
          numberOfFire={1}
          numberOfTrees={79}
          numberOfDeadTrees={8}
          numberOfWater={12}
          title={"Water Board"}
        />
      </section>
    </div>
  );
}

export default WaterBoard;
