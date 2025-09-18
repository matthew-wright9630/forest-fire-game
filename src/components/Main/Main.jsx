import "./Main.css";
import { Link } from "react-router-dom";

function Main({ instructionPopupIsOpen, setInstructionPopupIsOpen }) {
  function handleInstructionButtonClicked() {
    setInstructionPopupIsOpen(true);
  }
  return (
    <main>
      <section className="main">
        <h1 className="main__header">Welcome! This is the forest fire game.</h1>
        <div className="main__description">
          <p className="main__description__paragraph">
            This game was developed to show how a wildfire may spread through a
            forest.
          </p>
          {/* <p className="main__description__paragraph">
            To see instructions and how to play, select the "How to Play"
            button.
          </p> */}
          <p className="main__description__paragraph">
            To see a description of the game elements, you can click{" "}
            <button
              onClick={handleInstructionButtonClicked}
              className="main__button"
            >
              here
            </button>
          </p>
        </div>
        <div className="main__links">
          {/* <Link className="main__link" to={"/forest-fire-game/how-to-play/"}>
            <span className="main__span">How to Play</span>
          </Link> */}
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
          <Link className="main__link" to={"/forest-fire-game/random-board/"}>
            <span className="main__span">Random Board</span>
          </Link>
        </div>
        <div className="main__description">
          <p className="main__description__paragraph">
            Inspired by curricula from{" "}
            <a
              className="main__description__link"
              href="https://outreach.gi.alaska.edu/curricula?field_project_target_id=148&grade=All&field_discipline_target_id=All"
            >
              University of Alaska Outreach GI
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
export default Main;
