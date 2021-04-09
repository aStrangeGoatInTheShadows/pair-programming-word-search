

const wordSearch = (letters, word) => {

    let result = false;

    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            result = true;
        }
    }

    // console.log (letters[5][0]);
    // for each row vertical row at position x

    for (let j = 0; j < letters[0].length; j++) {
        const row = [];
        for (let i = 0; i < letters.length; i++) {
            row.push(letters[i][j]);
        }
        const rowString = row.join('');

        if (rowString.includes(word)) {
            result = true;
        }
    }

   // searchDiagnol(letters,word);

    return result;
}

// const searchDiagnol = (letters, word) => {
//     let letter = null;
//     const arr = [];
//     for (let i = 0; i < 5; i++) {
//         let x = i;        
//         let y = 0;

//         do {
//             if (letters[x][y]) {
//                 arr.push(letters[x][y]);
//             }

//             x++;
//             y++;
//             console.log(letters[x][y]);
//         } while (letters[x][y]);
//         const diagString = arr.join('');
//         console.log(diagString);
//     }

    
// };

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'VEEP')


module.exports = wordSearch;