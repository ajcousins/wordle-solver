import React, { Dispatch, SetStateAction, useState } from "react";
import ResultCommentary from "./ResultCommentary";

interface IProps {
  wordList: { word: string; freq: number }[];
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
}

export default function PossWords({ wordList, setCurLetters }: IProps) {
  const handleWordPress = (word: { word: string; freq: number }) => {
    const letters = word.word.split("").map((char: string) => {
      return { char: char.toUpperCase(), status: 0 };
    });
    setCurLetters(letters);
  };

  return (
    <>
      <ResultCommentary quantity={wordList.length} />

      {wordList.length > 1 && (
        <div className="board-container__poss-words">
          {wordList.map((word: { word: string; freq: number }) => {
            return (
              <div
                className="board-container__poss-words__word"
                onClick={() => handleWordPress(word)}
              >
                {word.word}
              </div>
            );
          })}
        </div>
      )}
      {wordList.length === 1 && (
        <div className="board-container__answer">
          {wordList[0].word.toUpperCase()}
        </div>
      )}
    </>
  );
}
