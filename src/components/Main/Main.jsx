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
            Random Board
          </Link>
          <Link className="main__link" to={"/forest-fire-game/tree-board/"}>
            Tree Board
          </Link>
          <Link className="main__link" to={"/forest-fire-game/dead-tree-board/"}>
            Dead Tree Board
          </Link>
          <Link className="main__link" to={"/forest-fire-game/water-board/"}>
            Water Board
          </Link>
          <Link className="main__link" to={"/forest-fire-game/house-board/"}>
            House Board
          </Link>
          <Link className="main__link" to={"/forest-fire-game/wind-board/"}>
            Wind Board
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Main;
