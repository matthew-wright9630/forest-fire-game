import Board from "../Board/Board";

function WindBoard({
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
          windIsInEffect={true}
          title={"Wind Board"}
          boardDescription={
            "Wind changes how fire spreads. It spreads 2 tiles in the direction of wind (3 if the tree is dead), then 1 in the directions on either side. Fire does not spread in other directions"
          }
          handleInstructionButtonClicked={handleInstructionButtonClicked}
          handleHowToPlayButtonClicked={handleHowToPlayButtonClicked}
        />
      </section>
    </div>
  );
}

export default WindBoard;
