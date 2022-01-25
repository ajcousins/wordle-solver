interface CellLetter {
  char: string;
  status: number;
}

export const filterList = (wordList: string[], curLetters: CellLetter[]) => {
  console.log("letterStates:", curLetters);

  let wordListCopy = [...wordList];
  //   let status: string[] = [];
  const curCharsArr = curLetters.map((word) => word.char.toLowerCase()); // ["Q", "W", "E", "R", "T"]
  //   console.log("Here", wordListCopy);

  const seen: {
    [index: string]: { status: number; count: number };
  } = {};

  // iterate through each letter in candidate cells
  for (let i = 0; i < 5; i++) {
    const candidateLetter = curCharsArr[i];
    const candidateStatus = curLetters[i].status;

    switch (candidateStatus) {
      case 1:
        /*
          - For each letter in candidate cells...
            - if this letter has already been seen with a yellow or green status:
              - filter out any word if the letter appears twice
            - if letter exists in any part of the word:
              - filter it out of the array
        */

        if (
          seen[candidateLetter].status === 2 ||
          seen[candidateLetter].status === 3
        ) {
          // This letter has already been seen in yellow or green, but this instance is grey, which
          // means the letter doesn't appear this many times.
          // If the letter appears "n-times" in a word, don't include it in return array.
          wordListCopy = wordListCopy.filter((word: string) => {
            // How many times does this letter appear in this word?
            const thisLetterCount = word.split("").reduce((p, c) => {
              return c === candidateLetter ? p + 1 : p;
            }, 0);

            if (seen[candidateLetter].count < thisLetterCount) {
            }
          });
        } else {
          wordListCopy = wordListCopy.filter((word: string) => {
            return !word
              .split("")
              .some((char: string) => char === candidateLetter);
          });
        }

        if (!seen[candidateLetter])
          seen[candidateLetter] = { status: candidateStatus, count: 1 };
        // candidateStatus only reflects first instance
        else {
          seen[candidateLetter].count++;
        }

        break;
      case 2:
        // letter is in word at incorrect location
        // status.push("letter is in word at incorrect location");
        break;
      case 3:
        // letter is in word at correct location
        // status.push("letter is in word at correct location");
        break;
      default:
        return "Error: Invalid Status. All cells must be marked.";
    }
  }

  console.log("newList:", wordListCopy);

  //   return status;
  return wordListCopy;
};
