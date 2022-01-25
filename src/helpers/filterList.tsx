interface CellLetter {
  char: string;
  status: number;
}

export const filterList = (wordList: string[], curLetters: CellLetter[]) => {
  console.log("letterStates:", curLetters);

  let wordListCopy = [...wordList];

  const curCharsArr = curLetters.map((word) => word.char.toLowerCase()); // ["l", "a", "m", "p", "s"]

  wordListCopy = wordListCopy.filter((word) => {
    const wordArr = word.split(""); // ["p", "e", "a", "r", "s"]
  });

  return wordListCopy;
};
