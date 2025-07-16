import "./BoardTile.css";

function BoardTile({ title = "", gridRow, lastRow = "false" }) {
  return (
    <div className= {`board__tile ${lastRow==="true" ? "board__empty-cell" : ""}`} >
      <h3 className="board-tile__name">{title}</h3>
    </div>
  );
}

export default BoardTile;
