import React, { Dispatch, SetStateAction, useState } from "react";
import { filterList } from "../helpers/filterList";
import { refineList } from "../helpers/refineList";
import { updateKnowledge } from "../helpers/updateKnowledge";
import { Knowledge } from "../types/types";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
  char: string;
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

export default function Key({
  char,
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
  const handlePress = (char: string) => {
    let arr = [...curLetters];

    if (char === "ENTER") {
      // Check if game state is correct for 'ENTER'. ie, no statuses === 0
      if (curLetters.map((letter: any) => letter.status).indexOf(0) !== -1)
        return;

      // Update knowledge
      const newKnowledge = updateKnowledge(curLetters, curKnowledge);

      setCurKnowledge(newKnowledge);

      // Generate list of result words
      const newWordList = refineList(wordList, newKnowledge);

      // OLD METHOD
      // const newWordList = filterList(wordList, curLetters);

      // push curLetters to history
      const historyCopy = [...guessHistory];
      historyCopy.push(curLetters);

      setGuessHistory(historyCopy);

      // clear curLetters
      setCurLetters([
        { char: "", status: 0 },
        { char: "", status: 0 },
        { char: "", status: 0 },
        { char: "", status: 0 },
        { char: "", status: 0 },
      ]);

      setWordList(newWordList);
      setGameState(3);

      return;
    }

    if (char === "DEL") {
      arr = arr.filter((item) => !(item.char === ""));
      if (arr.length < 1) return;
      else {
        arr.pop();
        let blanks = 5 - arr.length;
        while (blanks > 0) {
          arr.push({ char: "", status: 0 });
          blanks--;
        }
        setCurLetters(arr);
      }
      return;
    }

    arr = arr.filter((item) => !(item.char === ""));
    if (arr.length > 4) return;
    else {
      arr.push({ char: char, status: 0 });
      let blanks = 5 - arr.length;
      while (blanks > 0) {
        arr.push({ char: "", status: 0 });
        blanks--;
      }
      setCurLetters(arr);
    }
  };

  if (char === "ENTER" || char === "DEL") {
    return (
      <button
        className="game-keyboard__key game-keyboard__space-150"
        onClick={() => handlePress(char)}
      >
        {char}
      </button>
    );
  } else {
    return (
      <button className="game-keyboard__key" onClick={() => handlePress(char)}>
        {char}
      </button>
    );
  }
}
