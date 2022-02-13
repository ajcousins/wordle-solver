
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
        if (isConfirmedPos(alphabet, newKnowledge, index)) return;
        if (queryLetter.status === 3) {
            newKnowledge[queryLetter.char].confirmedPos.push(index);
            alphabet.forEach((alphaChar:string) => {
                const possPosIdx = newKnowledge[alphaChar].possPos.indexOf(index)
                if (possPosIdx === -1) return;
                else newKnowledge[alphaChar].possPos.splice(possPosIdx, 1);
            })
        }
    });
    // */

    // yellows
    /*
    queryLetters.forEach((queryLetter:CurLetter, index) => {
        if (isConfirmedPos(alphabet, newKnowledge, index)) return;
        // const isConfirmedPos = alphabet.some((letter) => newKnowledge[letter].confirmedPos.indexOf(index) !== -1)
        // if (isConfirmedPos) return;

    })
    */


    console.log("newKnowledge:", newKnowledge);
    
    return {}

}


const isConfirmedPos = (alphabet: string[], knowledge:Knowledge, index:number): boolean => {
    const isConfirmedPos = alphabet.some((letter) => knowledge[letter].confirmedPos.indexOf(index) !== -1)
    return isConfirmedPos ? true : false;
}