import React from "react";
import BoardRow from "./BoardRow";

export default function BoardContainer({ curLetters }: { curLetters: string }) {
  return (
    <div className="board-container">
      <BoardRow curLetters={curLetters} />
    </div>
  );
}
