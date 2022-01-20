import React, { useState, useEffect } from "react";
import Header from "./Header";
import BoardContainer from "./BoardContainer";
import GameKeyboard from "./GameKeyboard";

export default function Canvas() {
  const [curLetters, setCurLetters] = useState("");

  useEffect(() => {
    console.log("curLetters:", curLetters);
  }, [curLetters]);

  return (
    <div className="canvas">
      <Header />
      <BoardContainer curLetters={curLetters} />
      <GameKeyboard curLetters={curLetters} setCurLetters={setCurLetters} />
    </div>
  );
}
