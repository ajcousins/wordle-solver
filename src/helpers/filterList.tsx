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

  for (let i = 0; i < 5; i++) {
    switch (curLetters[i].status) {
      case 1:
        // console.log("case 1");

        // letter is NOT in word
        // status.push("letter is NOT in word");
        wordListCopy = wordListCopy.filter((word: string) => {
          let wordArr = word.split("");
          //   console.log("wordArr:", wordArr);

          for (let j = 0; j < 5; j++) {
            console.log(
              `wordArr[${i}], curCharsArr[${j}]:`,
              wordArr[i],
              curCharsArr[j]
            );

            if (wordArr[i] === curCharsArr[j]) return false;
          }
          return true;
        });
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
