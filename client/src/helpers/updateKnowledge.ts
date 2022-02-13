
import { CurLetter, Knowledge } from '../types/types';

export const updateKnowledge = (curLetters: CurLetter[], curKnowledge: Knowledge):{} => {

    console.log("curLetters:", curLetters);
    console.log("curKnowledge:", curKnowledge);

    const queryLetters = curLetters.map((letter) => {
        return { char: letter.char.toLocaleLowerCase(), status: letter.status }
    })

    const alphabet = Object.keys(curKnowledge); // a, b, c, d...

    const newKnowledge = {...curKnowledge};

    console.log("queryLetters:", queryLetters);
    console.log("alphabet:", alphabet);

    // alphabet.forEach((alphaChar:string) => {

    // })

    // greens 
    // /*
    queryLetters.forEach((queryLetter:CurLetter, index) => {
        // Is this index already confirmed/ green?
        if (isConfirmedPos(alphabet, newKnowledge, index)) return;

        // If this letter is green...
        if (queryLetter.status === 3) {
            // Confirm position
            newKnowledge[queryLetter.char].confirmedPos.push(index);
            // Confirm presence
            newKnowledge[queryLetter.char].confirmedPresence = true;
            // Discount position for all other letters
            alphabet.forEach((alphaChar:string) => {
                const possPosIdx = newKnowledge[alphaChar].possPos.indexOf(index)
                if (possPosIdx === -1) return;
                else newKnowledge[alphaChar].possPos.splice(possPosIdx, 1);
            })
        }
    });
    // */

    // yellows
    // 1. Handles 1 yellow
    // 2. Handles 2 yellows, different letters
    // 3. Handles 2 yellows, same letters
    // 4. Handles 1 yellow + 1 green, same letters
    // 5. Handles 1 yellow + 1 grey, same letters
    // /*
    queryLetters.forEach((queryLetter:CurLetter, index) => {
        // Is this index already confirmed/ green?
        if (isConfirmedPos(alphabet, newKnowledge, index)) return;

        // If this letter is yellow...
        if (queryLetter.status === 2) {
            // Remove this index as a possibility for this letter
            const possPosIdx = newKnowledge[queryLetter.char].possPos.indexOf(index);
            if (possPosIdx === -1) return;
            else newKnowledge[queryLetter.char].possPos.splice(possPosIdx, 1);
            // Confirm presence
            newKnowledge[queryLetter.char].confirmedPresence = true;
        }

    })
    // */

    // greys
    queryLetters.forEach((queryLetter:CurLetter, index) => {
        // Is this index already confirmed/ green?
        if (isConfirmedPos(alphabet, newKnowledge, index)) return;

        // If this letter is grey...
        if (queryLetter.status === 1) {
            // Remove all possible indexes
            newKnowledge[queryLetter.char].possPos = [];
        }

    })

    console.log("newKnowledge:", newKnowledge);
    
    return newKnowledge;

}


const isConfirmedPos = (alphabet: string[], knowledge:Knowledge, index:number): boolean => {
    const isConfirmedPos = alphabet.some((letter) => knowledge[letter].confirmedPos.indexOf(index) !== -1)
    return isConfirmedPos ? true : false;
}