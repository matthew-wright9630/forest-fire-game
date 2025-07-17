import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Main.css";
import Board from "../Board/Board";

function Main({ gameBoard, setGameBoard, gameStarted, setGameHasStarted }) {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="main">
        <h1 className="main__header">Welcome! This is the forest fire game.</h1>
        <Link
          className="main__link"
          to={"/random-board"}
        >
          Random Board
        </Link>
      </section>
    </main>
  );
}

export default Main;
