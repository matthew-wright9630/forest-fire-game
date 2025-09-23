import Board from "../Board/Board";

function FireFighterBoard({
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
          windIsInEffect={true}
          initialFireFighters={1}
          title={"Fire Fighter Board"}
          boardDescription={
            "The firefighter can be placed on a tree or dead tree tile and protects the tile they are on, as well as the 4 tiles on either side of it."
          }
          handleInstructionButtonClicked={handleInstructionButtonClicked}
          handleHowToPlayButtonClicked={handleHowToPlayButtonClicked}
        />
      </section>
    </div>
  );
}

export default FireFighterBoard;
