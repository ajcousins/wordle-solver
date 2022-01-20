import React, { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<string>>;
  char: string;
  curLetters: string;
}

export default function Key({ char, setCurLetters, curLetters }: IProps) {
  const handlePress = (char: string) => {
    const arr = curLetters.split("");
    // console.log("handle press", char);
    if (char === "ENTER") {
      return;
    }

    if (char === "DEL") {
      if (arr.length < 1) return;
      else {
        arr.pop();
        setCurLetters(arr.join(""));
      }
      return;
    }

    if (arr.length > 4) return;
    else {
      arr.push(char);
      setCurLetters(arr.join(""));
    }
  };

  // const keyInput = () => {
  //   console.log("key input", curLetters);
  // };

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
