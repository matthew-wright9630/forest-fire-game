import { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main({ }) {

  return (
    <main>
      <section className="main">
        <h1 className="main__header">Welcome! This is the forest fire game.</h1>
        <Link className="main__link" to={"/forest-fire-game/random-board/"}>
          Random Board
        </Link>
      </section>
    </main>
  );
}

export default Main;
