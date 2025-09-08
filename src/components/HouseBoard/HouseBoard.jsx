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
          numberOfFire={1}
          numberOfTrees={78}
          numberOfDeadTrees={8}
          numberOfWater={12}
          numberOfHouses={1}
          title={"House Board"}
        />
      </section>
    </div>
  );
}

export default HouseBoard;
