import React from "react";

interface IProps {
  wordList: string[];
}

export default function PossWords({ wordList }: IProps) {
  return (
    <>
      <div className={"instruction"}>It's one of these words...</div>
      <div className="board-container__poss-words">
        {wordList.map((word: string) => {
          return (
            <div className="board-container__poss-words__word">{word}</div>
          );
        })}
      </div>
    </>
  );
}
