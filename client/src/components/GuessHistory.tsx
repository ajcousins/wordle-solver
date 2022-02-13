import React, { Dispatch, SetStateAction } from "react";
import BoardRow from "./BoardRow";

interface IProps {
  guessHistory: {
    char: string;
    status: number;
  }[][];
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
}

export default function GuessHistory({ guessHistory, setCurLetters }: IProps) {
  return (
    <div>
      {guessHistory.map((row) => {
        const key = row.map((char) => char.char).join("");
        return (
          <BoardRow
            key={key}
            curLetters={row}
            setCurLetters={setCurLetters}
            disable
          />
        );
      })}
    </div>
  );
}
