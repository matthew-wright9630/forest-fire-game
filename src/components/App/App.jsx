import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import RandomBoard from "../RandomBoard/RandomBoard";
import TreeBoard from "../TreeBoard/TreeBoard";
import DeadTreeBoard from "../DeadTreeBoard/DeadTreeBoard";
import WaterBoard from "../WaterBoard/WaterBoard";
import HouseBoard from "../HouseBoard/HouseBoard";
import WindBoard from "../WindBoard/WindBoard";
import FireFighterBoard from "../FireFighterBoard/FireFighterBoard";
import UpdateGameModal from "../UpdateGameModal/UpdateGameModal";

function App() {
  const [gameBoard, setGameBoard] = useState([]);
  const [gameStarted, setGameHasStarted] = useState(false);
  const [boardArray, setBoardArray] = useState([]);

  return (
    <div className="page">
      <div>
        <div className="page__content">
          <Routes>
            <Route path="/forest-fire-game/" element={<Main />}></Route>

            <Route
              path="/forest-fire-game/random-board"
              element={
                <RandomBoard
                  gameBoard={gameBoard}
                  setGameBoard={setGameBoard}
                  gameStarted={gameStarted}
                  setGameHasStarted={setGameHasStarted}
                  boardArray={boardArray}
                  setBoardArray={setBoardArray}
                />
              }
            ></Route>
            <Route
              path="/forest-fire-game/tree-board"
              element={
                <TreeBoard
                  gameBoard={gameBoard}
                  setGameBoard={setGameBoard}
                  gameStarted={gameStarted}
                  setGameHasStarted={setGameHasStarted}
                  boardArray={boardArray}
                  setBoardArray={setBoardArray}
                />
              }
            ></Route>
            <Route
              path="/forest-fire-game/dead-tree-board"
              element={
                <DeadTreeBoard
                  gameBoard={gameBoard}
                  setGameBoard={setGameBoard}
                  gameStarted={gameStarted}
                  setGameHasStarted={setGameHasStarted}
                  boardArray={boardArray}
                  setBoardArray={setBoardArray}
                />
              }
            ></Route>
            <Route
              path="/forest-fire-game/water-board"
              element={
                <WaterBoard
                  gameBoard={gameBoard}
                  setGameBoard={setGameBoard}
                  gameStarted={gameStarted}
                  setGameHasStarted={setGameHasStarted}
                  boardArray={boardArray}
                  setBoardArray={setBoardArray}
                />
              }
            ></Route>
            <Route
              path="/forest-fire-game/house-board"
              element={
                <HouseBoard
                  gameBoard={gameBoard}
                  setGameBoard={setGameBoard}
                  gameStarted={gameStarted}
                  setGameHasStarted={setGameHasStarted}
                  boardArray={boardArray}
                  setBoardArray={setBoardArray}
                />
              }
            ></Route>
            <Route
              path="/forest-fire-game/wind-board"
              element={
                <WindBoard
                  gameBoard={gameBoard}
                  setGameBoard={setGameBoard}
                  gameStarted={gameStarted}
                  setGameHasStarted={setGameHasStarted}
                  boardArray={boardArray}
                  setBoardArray={setBoardArray}
                />
              }
            ></Route>
            <Route
              path="/forest-fire-game/fire-fighter-board"
              element={
                <FireFighterBoard
                  gameBoard={gameBoard}
                  setGameBoard={setGameBoard}
                  gameStarted={gameStarted}
                  setGameHasStarted={setGameHasStarted}
                  boardArray={boardArray}
                  setBoardArray={setBoardArray}
                />
              }
            ></Route>

            {/* <Route path="*">
                    <Error404 />
                    </Route> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
