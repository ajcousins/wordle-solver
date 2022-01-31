import React, { Dispatch, SetStateAction, useState } from "react";
import BoardRow from "./BoardRow";
import GuessHistory from "./GuessHistory";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
  curLetters: {
    char: string;
    status: number;
  }[];
  guessHistory: {
    char: string;
    status: number;
  }[][];
}

export default function BoardContainer({
  curLetters,
  setCurLetters,
  guessHistory,
}: IProps) {
  return (
    <div className="board-container">
      <GuessHistory guessHistory={guessHistory} setCurLetters={setCurLetters} />
      <BoardRow curLetters={curLetters} setCurLetters={setCurLetters} />
    </div>
  );
}
