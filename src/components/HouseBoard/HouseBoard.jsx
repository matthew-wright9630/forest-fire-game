import Board from "../Board/Board";

function HouseBoard({
  gameBoard,
  setGameBoard,
  gameStarted,
  setGameHasStarted,
  boardArray,
  setBoardArray,
}) {

  return (
    <div>
      <section className="house-board">
        <Board
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
          boardArray={boardArray}
          setBoardArray={setBoardArray}
          initialFires={1}
          initialTrees={78}
          initialDeadTrees={8}
          initialWaters={12}
          initialHouses={1}
          title={"House Board"}
        />
      </section>
    </div>
  );
}

export default HouseBoard;
