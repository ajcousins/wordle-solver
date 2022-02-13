import React, { Dispatch, SetStateAction, useState } from "react";
import Cell from "./Cell";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
  curLetters: {
    char: string;
    status: number;
  }[];
  disable?: boolean;
}

function numberRange(start: number, end: number) {
  return new Array(end - start).fill(0).map((d, i) => i + start);
}

export default function BoardRow({
  curLetters,
  setCurLetters,
  disable,
}: IProps) {
  return (
    <div className="board-container__board-row">
      {numberRange(0, 5).map((num, i) => (
        <Cell
          key={num}
          char={curLetters[num].char}
          setCurLetters={setCurLetters}
          curLetters={curLetters}
          index={i}
          disable={disable}
        />
      ))}
    </div>
  );
}
