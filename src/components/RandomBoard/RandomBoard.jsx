import "../RandomBoard/RandomBoard.css";
import Board from "../Board/Board";

function RandomBoard({
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
          wind={4}
          initialFireFighters={1}
          title={"Main Game"}
          windIsInEffect={true}
          gameCanBeUpdated={true}
          handleInstructionButtonClicked={handleInstructionButtonClicked}
          handleHowToPlayButtonClicked={handleHowToPlayButtonClicked}
        />
      </section>
    </div>
  );
}

export default RandomBoard;
