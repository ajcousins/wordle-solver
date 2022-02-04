interface CellLetter {
  char: string;
  status: number;
}

export const yellowCheck = (
  queryCells: CellLetter[],
  candidateWordArr: string[]
): boolean => {
  const yellowDict: { [index: string]: number[] } = {};
  queryCells.forEach((letter: CellLetter, i) => {
    if (letter.status === 2) {
      if (!yellowDict[letter.char]) yellowDict[letter.char] = [i];
      else yellowDict[letter.char].push(i);
    }
  }); // { e: [0, 1], y: [2]}

  const yellowLetters = Object.keys(yellowDict);

  // For each yellow letter
  for (let i = 0; i < yellowLetters.length; i++) {
    for (let j = 0; j < yellowDict[yellowLetters[i]].length; j++) {
      const currentIndex = yellowDict[yellowLetters[i]][j];
      const wordArrCopy = [...candidateWordArr].map((char: string) =>
        char.toUpperCase()
      );
      wordArrCopy.splice(currentIndex, 1);

      const countInQuery = yellowDict[yellowLetters[i]].length;
      const countInCandidate = wordArrCopy.reduce(
        (p, c) => (c === yellowLetters[i] ? p + 1 : p),
        0
      );
      if (countInQuery !== countInCandidate) return false;
    }
  }
  return true;
};
