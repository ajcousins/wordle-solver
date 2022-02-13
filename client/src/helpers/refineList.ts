import { Knowledge } from '../types/types';

export const refineList = (wordList:string[], knowledge:Knowledge) => {

    let newWordList = [...wordList];

    // Parse Knowledge
    const alphabet = Object.keys(knowledge); // a, b, c, d...

    const confirmedPositions = new Array(5).fill(undefined);
    for (let i = 0; i < confirmedPositions.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (knowledge[alphabet[j]].confirmedPos.indexOf(i) !== -1) {
                confirmedPositions.splice(i, 1, alphabet[j]);
            }
        }
    }

    const confirmedPresence = alphabet.filter((char) => knowledge[char].confirmedPresence);

    // console.log("confirmedPositions:", confirmedPositions);
    console.log("confirmedPresence:", confirmedPresence);
    
    
    newWordList = newWordList.filter((word) => {
        
        const wordArr = word.split("");

        // 1. word MUST have letter in any confirmed positions
        if (!confirmedPositions.every((char, index) => {
            if (!char) return true;
            if (char === wordArr[index]) return true;
        })) return false;


        // 2. word MUST have letter if presence is confirmed in knowledge
        if (!confirmedPresence.every((queryChar) => {
            return wordArr.some((char) => char === queryChar)
        })) return false;
    
        // 3. each letter must be possible in its position

        return true;
    })

    

    return newWordList;
}