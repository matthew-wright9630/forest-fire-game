import { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main({}) {
  return (
    <main>
      <section className="main">
        <h1 className="main__header">Welcome! This is the forest fire game.</h1>
        <div className="main__links">
          <Link className="main__link" to={"/forest-fire-game/random-board/"}>
            <span className="main__span">Random Board</span>
          </Link>
          <Link className="main__link" to={"/forest-fire-game/tree-board/"}>
            <span className="main__span">Tree Board</span>
          </Link>
          <Link
            className="main__link"
            to={"/forest-fire-game/dead-tree-board/"}
          >
            <span className="main__span">Dead Tree Board</span>
          </Link>
          <Link className="main__link" to={"/forest-fire-game/water-board/"}>
            <span className="main__span">Water Board</span>
          </Link>
          <Link className="main__link" to={"/forest-fire-game/house-board/"}>
            <span className="main__span">House Board</span>
          </Link>
          <Link className="main__link" to={"/forest-fire-game/wind-board/"}>
            <span className="main__span">Wind Board</span>
          </Link>
          <Link
            className="main__link"
            to={"/forest-fire-game/fire-fighter-board/"}
          >
            <span className="main__span">Fire Fighter Board</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Main;
