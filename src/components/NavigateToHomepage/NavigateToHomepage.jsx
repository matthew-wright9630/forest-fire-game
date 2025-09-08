import { Link } from "react-router-dom";
import "./NavigateToHomepage.css";

function NavigateToHomepage({endGame}) {
  return (
    <div className="navigate-to-homepage">
      <Link onClick={endGame} className="navigate-to-homepage__link" to={"/forest-fire-game/"}>
        Return to the homepage
      </Link>
      ;
    </div>
  );
}

export default NavigateToHomepage;
