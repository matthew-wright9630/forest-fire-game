import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import RandomBoard from "../RandomBoard/RandomBoard";
import TreeBoard from "../TreeBoard/TreeBoard";
import DeadTreeBoard from "../DeadTreeBoard/DeadTreeBoard";

function App() {
  const [count, setCount] = useState(0);
  const [gameBoard, setGameBoard] = useState([]);
  const [gameStarted, setGameHasStarted] = useState(false);
  const [boardArray, setBoardArray] = useState([]);

  return (
    <div className="page">
      <Routes>
        <Route path="/forest-fire-game/" element={<Main />}>
          {/* <Main /> */}
        </Route>

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

        {/* <Route path="*">
                    <Error404 />
                    </Route> */}
      </Routes>
    </div>
  );
}

export default App;
