import React, { useState, useEffect } from "react";
import Header from "./Header";
import BoardContainer from "./BoardContainer";
import GameKeyboard from "./GameKeyboard";
import Instruction from "./Instruction";
import { libraryArr } from "../reference/libOutput";

export default function Canvas() {
  const [curLetters, setCurLetters] = useState([
    { char: "", status: 0 },
    { char: "", status: 0 },
    { char: "", status: 0 },
    { char: "", status: 0 },
    { char: "", status: 0 },
  ]);
  const [gameState, setGameState] = useState(0);
  const [wordList, setWordList] = useState<string[]>([]);
  const [guessHistory, setGuessHistory] = useState([]);

  // Load Word List
  useEffect(() => {
    console.log("Load", libraryArr);
    setWordList([...libraryArr]);
  }, []);

  // Game State
  useEffect(() => {
    console.log("curLetters:", curLetters);
    // TO DO: Update gameState if no chars are blank.

    // TO DO: Update gameState if no chars are blank and no statuses === 0.
  }, [curLetters]);

  return (
    <div className="canvas">
      <Header />
      <Instruction gameState={gameState} />
      <BoardContainer
        curLetters={curLetters}
        setCurLetters={setCurLetters}
        guessHistory={guessHistory}
      />
      <GameKeyboard
        curLetters={curLetters}
        setCurLetters={setCurLetters}
        wordList={wordList}
        setWordList={setWordList}
      />
    </div>
  );
}
