import { Knowledge } from "../types/types";

export const refineList = (
  wordList: { word: string; freq: number }[],
  knowledge: Knowledge
): { word: string; freq: number }[] => {
  let newWordList = [...wordList];

  // Summarise Knowledge
  const alphabet = Object.keys(knowledge); // a, b, c, d...

  const confirmedPositions = new Array(5).fill(undefined);
  for (let i = 0; i < confirmedPositions.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (knowledge[alphabet[j]].confirmedPos.indexOf(i) !== -1) {
        confirmedPositions.splice(i, 1, alphabet[j]);
      }
    }
  }

  const confirmedPresence = alphabet.filter(
    (char) => knowledge[char].confirmedPresence
  );

  // Parse Word List
  newWordList = newWordList.filter((word) => {
    const wordArr = word.word.split("");

    // 1. word MUST have letter in any confirmed positions
    if (
      !confirmedPositions.every((char, index) => {
        if (!char) return true;
        if (char === wordArr[index]) return true;
      })
    )
      return false;

    // 2. word MUST have letter if presence is confirmed in knowledge
    if (
      !confirmedPresence.every((queryChar) => {
        return wordArr.some((char) => char === queryChar);
      })
    )
      return false;

    // 3. each letter must be possible in its position
    if (
      !wordArr.every((char, index) => {
        if (knowledge[char].possPos.indexOf(index) === -1) {
          if (knowledge[char].confirmedPos.indexOf(index) === -1) return false;
          else return true;
        } else return true;
      })
    )
      return false;

    // If word passes all tests, let through filter
    return true;
  });

  // sort by freq
  newWordList = newWordList.sort((a, b) => {
    return a.freq > b.freq ? -1 : 1;
  });

  console.log("newWordList:", newWordList);

  return newWordList;
};
