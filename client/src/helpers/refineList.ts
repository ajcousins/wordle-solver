import { Knowledge } from '../types/types';

export const refineList = (wordList:string[], knowledge:Knowledge) => {

    const newWordList = [...wordList];

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

    console.log("confirmedPositions:", confirmedPositions);
    


    newWordList.filter((word) => {

        // 1. word MUST have letter in any confirmed positions
    
        // 2. word MUST have letter if presence is confirmed in knowledge
    
        // 3. each letter must be possible in its position


    })

    return newWordList;
}