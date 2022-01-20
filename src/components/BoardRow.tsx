import React from "react";
import Cell from "./Cell";

export default function BoardRow({ curLetters }: { curLetters: string }) {
  return (
    <div className="board-container__board-row">
      <Cell char={curLetters[0]} />
      <Cell char={curLetters[1]} />
      <Cell char={curLetters[2]} />
      <Cell char={curLetters[3]} />
      <Cell char={curLetters[4]} />
    </div>
  );
}
