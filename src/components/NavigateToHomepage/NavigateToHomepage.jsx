import { Link } from "react-router-dom";
import "./NavigateToHomepage.css";

function NavigateToHomepage({ endGame, gameStarted }) {
  return (
    <div
      className={`navigate-to-homepage ${
        gameStarted ? "navigate-to-homepage_small" : ""
      }`}
    >
      <Link
        onClick={endGame}
        className={`navigate-to-homepage__link ${
          !gameStarted ? "navigate-to-homepage__link_large" : ""
        }`}
        to={"/forest-fire-game/"}
      >
        <p
          className={`navigate-to-homepage__title ${
            !gameStarted ? "" : "navigate-to-homepage__title_small"
          }`}
        >
          Return to homepage
        </p>
      </Link>
    </div>
  );
}

export default NavigateToHomepage;
