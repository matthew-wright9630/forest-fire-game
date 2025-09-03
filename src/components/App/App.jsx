import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import RandomBoard from "../RandomBoard/RandomBoard";

function App() {
  const [count, setCount] = useState(0);
  const [gameBoard, setGameBoard] = useState([]);
  const [gameStarted, setGameHasStarted] = useState(false);

  const baseURL = "/forest-fire-game/";

  return (
    <Routes>
      <Route path="/forest-fire-game/" element={<Main />}>
        {/* <Main /> */}
      </Route>

      <Route path="/forest-fire-game/random-board" element={<RandomBoard />}>
        {/* <RandomBoard /> */}
      </Route>

      {/* <Route path="*">
                    <Error404 />
                </Route> */}
    </Routes>
  );
}

export default App;
