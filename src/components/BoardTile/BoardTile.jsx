import "./BoardTile.css";

function BoardTile({ title = "", gridRow, lastRow = "false", item }) {
  return (
    <div
      className={`board__tile ${lastRow === "true" ? "board__empty-cell" : ""}`}
    >
      <h3 className="board-tile__name">{title}</h3>
      {/* <p className="board-tile__type">{item?.name}</p> */}
      {item ? (
        <img className="board-tile__image" src={item?.image} alt={item?.name} />
      ) : (
        ""
      )}
    </div>
  );
}

export default BoardTile;
