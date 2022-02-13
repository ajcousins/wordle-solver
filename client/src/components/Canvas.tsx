import React, { useState, useEffect } from "react";
import Header from "./Header";
import BoardContainer from "./BoardContainer";
import GameKeyboard from "./GameKeyboard";
import Instruction from "./Instruction";
import { libraryArr } from "../reference/libOutput";
import { initialKnowledge } from "../helpers/initialKnowledge";
import { Knowledge } from "../types/types";

export default function Canvas() {
  const [curLetters, setCurLetters] = useState([
    { char: "", status: 0 },
    { char: "", status: 0 },
    { char: "", status: 0 },
    { char: "", status: 0 },
    { char: "", status: 0 },
  ]);
  const [gameState, setGameState] = useState(0);
  const [wordList, setWordList] = useState<{ word: string; freq: number }[]>(
    []
  );
  const [guessHistory, setGuessHistory] = useState<
    { char: string; status: number }[][]
  >([]);

  const [curKnowledge, setCurKnowledge] = useState<Knowledge>(initialKnowledge);

  // First load => Load Word List. Reset knowledge.
  useEffect(() => {
    setWordList([...libraryArr]);
  }, []);

  useEffect(() => {
    console.log("curKnowledge:", curKnowledge);
  }, [curKnowledge]);

  // Game State
  useEffect(() => {
    // TO DO: Update gameState if no chars are blank.
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
      curLetters.map((letter: any) => letter.status).indexOf(0) === -1 // If "0" is not in array of statuses.
    )
      return true;
    return false;
  };

  return (
    <div className="canvas">
      <Header />
      <Instruction gameState={gameState} />
      <BoardContainer
        curLetters={curLetters}
        setCurLetters={setCurLetters}
        guessHistory={guessHistory}
        wordList={wordList}
        gameState={gameState}
      />
      <GameKeyboard
        curLetters={curLetters}
        setCurLetters={setCurLetters}
        wordList={wordList}
        setWordList={setWordList}
        guessHistory={guessHistory}
        setGuessHistory={setGuessHistory}
        setGameState={setGameState}
        curKnowledge={curKnowledge}
        setCurKnowledge={setCurKnowledge}
      />
    </div>
  );
}
