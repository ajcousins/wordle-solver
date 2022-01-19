import React from "react";
import { qwertyTop, qwertyMid, qwertyBot } from "../reference/qwerty";

export default function GameKeyboard() {
  return (
    <div className="game-keyboard">
      <div className="game-keyboard__inner">
        <div className="game-keyboard__row">
          {qwertyTop.map((key) => {
            return <button className="game-keyboard__key">{key}</button>;
          })}
        </div>
        <div className="game-keyboard__row">
          <div className="game-keyboard__spacer-half" />
          {qwertyMid.map((key) => {
            return <button className="game-keyboard__key">{key}</button>;
          })}
          <div className="game-keyboard__spacer-half" />
        </div>
        <div className="game-keyboard__row">
          {qwertyBot.map((key) => {
            if (key === "ENTER" || key === "DEL") {
              return (
                <button className="game-keyboard__key game-keyboard__space-150">
                  {key}
                </button>
              );
            } else return <button className="game-keyboard__key">{key}</button>;
          })}
        </div>
      </div>
    </div>
  );
}
