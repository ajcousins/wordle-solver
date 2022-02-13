import React, { Dispatch, SetStateAction, useState } from "react";
import BoardRow from "./BoardRow";
import GuessHistory from "./GuessHistory";
import PossWords from "./PossWords";

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
  wordList: { word: string; freq: number }[];
  gameState: number;
}

export default function BoardContainer({
  curLetters,
  setCurLetters,
  guessHistory,
  wordList,
  gameState,
}: IProps) {
  return (
    <div className="board-container">
      <GuessHistory guessHistory={guessHistory} setCurLetters={setCurLetters} />
      {gameState === 3 ? (
        <PossWords wordList={wordList} setCurLetters={setCurLetters} />
      ) : (
        <BoardRow curLetters={curLetters} setCurLetters={setCurLetters} />
      )}
    </div>
  );
}
