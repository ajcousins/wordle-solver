interface CellLetter {
  char: string;
  status: number;
}

export const filterList = (wordList: string[], curLetters: CellLetter[]) => {
  let possibleWords = [...wordList];

  const yellowDict: { [index: string]: number } = {};
  curLetters.forEach((letter: CellLetter) => {
    if (letter.status === 2) {
      if (!yellowDict[letter.char]) yellowDict[letter.char] = 1;
      else yellowDict[letter.char] += 1;
    }
  }); // {"a" : 1, "v" : 2}

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
    // Remove any green or yellow letters from candidate word
    for (let j = colouredIndexes.length - 1; j >= 0; j--) {
      possWordArr.splice(colouredIndexes[j], 1);
    }

    // Get yellow letters
    const yellowLetters = Object.keys(yellowDict);

    // Reject word if letter count does not match query letter count for remaining chars
    for (let i = 0; i < yellowLetters.length; i++) {
      const count = possWordArr.reduce((p, c) => {
        return c === yellowLetters[i].toLowerCase() ? p + 1 : p;
      }, 0);
      if (count !== yellowDict[yellowLetters[i]]) return false;
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
