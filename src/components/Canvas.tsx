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
  const [guessHistory, setGuessHistory] = useState<
    { char: string; status: number }[][]
  >([]);

  // Load Word List
  useEffect(() => {
    console.log("Load", libraryArr);
    setWordList([...libraryArr]);
  }, []);

  // Game State
  useEffect(() => {
    console.log("curLetters:", curLetters);
    // TO DO: Update gameState if no chars are blank.
    console.log("Blanks:", checkBlanks(curLetters));
    console.log("Status:", checkStati(curLetters));
    if (checkBlanks(curLetters) && !checkStati(curLetters)) {
      setGameState(1);
    } else if (checkBlanks(curLetters) && checkStati(curLetters)) {
      setGameState(2);
    } else if (gameState === 3) return;
    else setGameState(0);

    // TO DO: Update gameState if no chars are blank and no statuses === 0.
  }, [curLetters]);

  const checkBlanks = (curLetters: any): boolean => {
    if (
      curLetters
        .map((letter: any) => letter.char)
        .reduce(
          (p: boolean, c: any) => (c === "" || p === true ? true : false),
          false
        )
    )
      return false;
    return true;
  };
  const checkStati = (curLetters: any): boolean => {
    if (
      curLetters
        .map((letter: any) => letter.status)
        .reduce((p: number, c: number) => c + p, 0) < 5
    )
      return false;
    return true;
  };

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
        guessHistory={guessHistory}
        setGuessHistory={setGuessHistory}
        setGameState={setGameState}
      />
    </div>
  );
}
