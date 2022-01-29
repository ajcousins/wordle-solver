import { yellowCheck } from "./yellowCheck";

interface CellLetter {
  char: string;
  status: number;
}

export const filterList = (wordList: string[], curLetters: CellLetter[]) => {
  let possibleWords = [...wordList];

  const colouredIndexes = curLetters
    .map((letter, i) => i)
    .filter(
      (i: number) => curLetters[i].status === 2 || curLetters[i].status === 3
    ); // [2, 3, 4] Indexes that are yellow or green

  const greyChars = curLetters
    .filter((letter: CellLetter) => letter.status === 1)
    .map((letter: CellLetter) => letter.char.toLowerCase()); // ["a", "m", "p"] Chars that are grey

  possibleWords = possibleWords.filter((possWord) => {
    const possWordArr = possWord.split(""); // ["p", "e", "a", "r", "s"]

    // --- CHECK GREEN CELLS ---
    for (let i = 0; i < 5; i++) {
      if (curLetters[i].status === 3) {
        if (curLetters[i].char.toLowerCase() !== possWordArr[i]) return false;
      }
    }

    // --- CHECK YELLOW CELLS ---
    if (!yellowCheck(curLetters, possWordArr)) return false;

    // Remove any green or yellow letters from candidate word
    for (let j = colouredIndexes.length - 1; j >= 0; j--) {
      possWordArr.splice(colouredIndexes[j], 1);
    }

    //  --- CHECK GREY CELLS ---
    for (let i = 0; i < greyChars.length; i++) {
      if (possWordArr.indexOf(greyChars[i]) !== -1) return false;
    }

    // If word has gotten this far without returning false, return true/ allow through filter.
    return true;
  });

  console.log("Filtered word list:", possibleWords);

  return possibleWords;
};
