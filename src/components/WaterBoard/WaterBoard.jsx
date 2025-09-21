import Board from "../Board/Board";

function WaterBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
  handleInstructionButtonClicked,
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
          initialFires={1}
          initialTrees={79}
          initialDeadTrees={8}
          initialWaters={12}
          title={"River Board"}
          boardDescription={
            "River tiles do not burn, but fire can jump over if conditions are correct"
          }
          handleInstructionButtonClicked={handleInstructionButtonClicked}
        />
      </section>
    </div>
  );
}

export default WaterBoard;
