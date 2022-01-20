import React, { Dispatch, SetStateAction, useState } from "react";
import { qwerty } from "../reference/qwerty";
import Key from "./Key";

interface IProps {
  setCurLetters: Dispatch<SetStateAction<string>>;
  curLetters: string;
}

export default function GameKeyboard({ setCurLetters, curLetters }: IProps) {
  return (
    <div className="game-keyboard">
      <div className="game-keyboard__inner">
        <div className="game-keyboard__row">
          {qwerty[0].map((key) => {
            return (
              <Key
                char={key}
                setCurLetters={setCurLetters}
                curLetters={curLetters}
              />
            );
          })}
        </div>
        <div className="game-keyboard__row">
          <div className="game-keyboard__spacer-050" />
          {qwerty[1].map((key) => {
            return (
              <Key
                char={key}
                setCurLetters={setCurLetters}
                curLetters={curLetters}
              />
            );
          })}
          <div className="game-keyboard__spacer-050" />
        </div>
        <div className="game-keyboard__row">
          {qwerty[2].map((key) => {
            return (
              <Key
                char={key}
                setCurLetters={setCurLetters}
                curLetters={curLetters}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
