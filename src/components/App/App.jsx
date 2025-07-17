import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";

function App() {
  const [count, setCount] = useState(0);
  const [gameBoard, setGameBoard] = useState([]);
  const [gameStarted, setGameHasStarted] = useState(false);

  return (
    <>
      <div className="page">
        <Routes>
          {/* <Route path="*" element={<PageNotFound />}></Route> */}
          <Route
            path="/forest-fire-game/"
            element={
              <Main
                gameBoard={gameBoard}
                setGameBoard={setGameBoard}
                gameStarted={gameStarted}
                setGameHasStarted={setGameHasStarted}
              />
            }
          ></Route>
          <Route
            path="/forest-fire-game/random-board"
            element={
              <Main
                gameBoard={gameBoard}
                setGameBoard={setGameBoard}
                gameStarted={gameStarted}
                setGameHasStarted={setGameHasStarted}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
