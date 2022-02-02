import React, { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  char: string;
  setCurLetters: Dispatch<SetStateAction<{ char: string; status: number }[]>>;
  curLetters: {
    char: string;
    status: number;
  }[];
  index: number;
  disable?: boolean;
}

export default function Cell({
  char,
  setCurLetters,
  curLetters,
  index,
  disable,
}: IProps) {
  const handleCellClick = () => {
    if (disable) return;
    if (curLetters[index].char === "") return;
    let curStatus = curLetters[index].status;
    if (curStatus === 3) curStatus = 0;
    else curStatus++;
    let newArr = [...curLetters];
    newArr[index].status = curStatus;
    setCurLetters(newArr);
  };

  const statusStyle = () => {
    switch (curLetters[index].status) {
      case 0:
        return "";
      case 1:
        return "board-container__cell__OO";
      case 2:
        return "board-container__cell__OX";
      case 3:
        return "board-container__cell__XX";
    }
  };

  return (
    <div
      className={`board-container__cell ${statusStyle()}`}
      onClick={handleCellClick}
    >
      {char}
    </div>
  );
}
