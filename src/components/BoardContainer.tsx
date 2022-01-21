import React, { Dispatch, SetStateAction, useState } from "react";
import BoardRow from "./BoardRow";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
  curLetters: {
    char: string;
    status: number;
  }[];
}

export default function BoardContainer({ curLetters, setCurLetters }: IProps) {
  return (
    <div className="board-container">
      <BoardRow curLetters={curLetters} setCurLetters={setCurLetters} />
    </div>
  );
}
