import React, { Dispatch, SetStateAction, useState } from "react";
import { filterList } from "../helpers/filterList";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
  char: string;
  curLetters: {
    char: string;
    status: number;
  }[];
  wordList: string[];
}

export default function Key({
  char,
  setCurLetters,
  curLetters,
  wordList,
}: IProps) {
  const handlePress = (char: string) => {
    let arr = [...curLetters];

    if (char === "ENTER") {
      // TO DO: Check if game state is correct for 'ENTER'
      console.log("ENTER");

      // const letterStates = curLetters.map((cell) => cell.status);
      console.log("wordList before function:", wordList);

      const newWordList = filterList(wordList, curLetters);
      // console.log("newWordList:", newWordList);
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
