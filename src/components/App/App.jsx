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
        <Main
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameStarted={gameStarted}
          setGameHasStarted={setGameHasStarted}
        />
      </div>
    </>
  );
}

export default App;
