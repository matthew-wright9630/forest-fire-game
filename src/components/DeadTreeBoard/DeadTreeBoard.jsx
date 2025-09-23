import Board from "../Board/Board";

function DeadTreeBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
  handleInstructionButtonClicked,
  handleHowToPlayButtonClicked,
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
          initialFires={1}
          initialTrees={91}
          initialDeadTrees={8}
          title={"Dead Tree Board"}
          boardDescription={
            "Dead trees burn like other trees, but also spread 1 more in cardinal directions"
          }
          handleInstructionButtonClicked={handleInstructionButtonClicked}
          handleHowToPlayButtonClicked={handleHowToPlayButtonClicked}
        />
      </section>
    </div>
  );
}

export default DeadTreeBoard;
