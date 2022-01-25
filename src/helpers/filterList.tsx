interface CellLetter {
  char: string;
  status: number;
}

export const filterList = (wordList: string[], curLetters: CellLetter[]) => {
  console.log("letterStates:", curLetters);

  let wordListCopy = [...wordList];

  const curCharsArr = curLetters.map((letter) => letter.char.toLowerCase()); // ["l", "a", "m", "p", "s"]

  const yellowDict: {
    [index: string]: number;
  } = {};
  curLetters.forEach((letter: CellLetter) => {
    if (letter.status === 2) {
      if (!yellowDict[letter.char]) yellowDict[letter.char] = 1;
      else yellowDict[letter.char] += 1;
    }
  }); // {"a" : 1, "v" : 2}

  const greenIndexes = curLetters
    .map((letter: CellLetter, i) => i)
    .filter((i: number) => curLetters[i].status === 3); // [3, 4]

  wordListCopy = wordListCopy.filter((word) => {
    const wordArr = word.split(""); // ["p", "e", "a", "r", "s"]

    // GREEN CELLS
    // This filters out the most words, so should be performed first.
    /*
    For each letter in curCharArr:
    If its status is green:
    allow through filter
    */

    for (let i = 0; i < 5; i++) {
      // CHECK GREEN CELLS
      if (curLetters[i].status === 3) {
        if (curLetters[i].char.toLowerCase() !== wordArr[i]) return false;
      }
    }

    // CHECK YELLOW CELLS
    /*
      Which letters are yellow? And how many are there? --> yellowDict

      Of the yellow letters, is the same quantity present in this word after removing green indexes?

      Iterate through yellowDict
        If number of yellow letters doesn't match this word: return false
      */

    // REMOVE GREEN LETTERS
    for (let j = greenIndexes.length - 1; j >= 0; j--) {
      wordArr.splice(greenIndexes[j], 1);
    }

    // GET YELLOW LETTERS
    const yellowLetters = Object.keys(yellowDict);
    // yellowLetters.forEach((letter: string) => {
    for (let i = 0; i < yellowLetters.length; i++) {
      console.log("letter:", yellowLetters[i]);

      const count = wordArr.reduce((p, c) => {
        console.log("c, letter", c, yellowLetters[i].toLowerCase());

        return c === yellowLetters[i].toLowerCase() ? p + 1 : p;
      }, 0);
      console.log(`letter ${yellowLetters[i]}, count: ${count}`);

      console.log(
        `count ${count} !== yellowDict[letter] ${yellowDict[yellowLetters[i]]}`
      );
      if (count !== yellowDict[yellowLetters[i]]) console.log(`REMOVE ${word}`);

      if (count !== yellowDict[yellowLetters[i]]) return false;
    }
    // });

    // If word has gotten this far without returning false, return true/ allow through filter.
    return true;
  });

  console.log("Filtered word list:", wordListCopy);

  return wordListCopy;
};
