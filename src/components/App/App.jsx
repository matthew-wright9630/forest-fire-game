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

  return (
        <Router>
            <Switch>
                <Route key="main" exact path={['/', '/main']}>
                    <Main />
                </Route>

                <Route key="randomBoard" exact path="/random-board">
                    <RandomBoard />
                </Route>

                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
