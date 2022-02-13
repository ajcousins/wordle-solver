import React, { Dispatch, SetStateAction, useState } from "react";
import { qwerty } from "../reference/qwerty";
import Key from "./Key";
import { Knowledge } from "../types/types";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
  curLetters: {
    char: string;
    status: number;
  }[];
  wordList: { word: string; freq: number }[];
  setWordList: Dispatch<SetStateAction<{ word: string; freq: number }[]>>;
  guessHistory: {
    char: string;
    status: number;
  }[][];
  setGuessHistory: Dispatch<
    SetStateAction<{ char: string; status: number }[][]>
  >;
  setGameState: Dispatch<SetStateAction<number>>;
  curKnowledge: Knowledge;
  setCurKnowledge: Dispatch<SetStateAction<Knowledge>>;
}

export default function GameKeyboard({
  setCurLetters,
  curLetters,
  wordList,
  setWordList,
  guessHistory,
  setGuessHistory,
  setGameState,
  curKnowledge,
  setCurKnowledge,
}: IProps) {
  return (
    <div className="game-keyboard">
      <div className="game-keyboard__inner">
        <div className="game-keyboard__row">
          {qwerty[0].map((key) => {
            return (
              <Key
                key={key}
                char={key}
                setCurLetters={setCurLetters}
                curLetters={curLetters}
                wordList={wordList}
                setWordList={setWordList}
                guessHistory={guessHistory}
                setGuessHistory={setGuessHistory}
                setGameState={setGameState}
                curKnowledge={curKnowledge}
                setCurKnowledge={setCurKnowledge}
              />
            );
          })}
        </div>
        <div className="game-keyboard__row">
          <div className="game-keyboard__spacer-050" />
          {qwerty[1].map((key) => {
            return (
              <Key
                key={key}
                char={key}
                setCurLetters={setCurLetters}
                curLetters={curLetters}
                wordList={wordList}
                setWordList={setWordList}
                guessHistory={guessHistory}
                setGuessHistory={setGuessHistory}
                setGameState={setGameState}
                curKnowledge={curKnowledge}
                setCurKnowledge={setCurKnowledge}
              />
            );
          })}
          <div className="game-keyboard__spacer-050" />
        </div>
        <div className="game-keyboard__row">
          {qwerty[2].map((key) => {
            return (
              <Key
                key={key}
                char={key}
                setCurLetters={setCurLetters}
                curLetters={curLetters}
                wordList={wordList}
                setWordList={setWordList}
                guessHistory={guessHistory}
                setGuessHistory={setGuessHistory}
                setGameState={setGameState}
                curKnowledge={curKnowledge}
                setCurKnowledge={setCurKnowledge}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
