import React, { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  wordList: string[];
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
}

export default function PossWords({ wordList, setCurLetters }: IProps) {
  const handleWordPress = (word: string) => {
    const letters = word.split("").map((char: string) => {
      return { char: char.toUpperCase(), status: 0 };
    });
    setCurLetters(letters);
  };

  return (
    <>
      <div className={"instruction top-bottom-pad-16"}>
        It's one of these words...
      </div>
      <div className="board-container__poss-words">
        {wordList.map((word: string) => {
          return (
            <div
              className="board-container__poss-words__word"
              onClick={() => handleWordPress(word)}
            >
              {word}
            </div>
          );
        })}
      </div>
    </>
  );
}
