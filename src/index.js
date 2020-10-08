const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if (expr.length % 10 != 0) throw Error;
    let stringAll = '';
    let letters = [];
    let str = '';
    for (let i = 0, j = 0; i <= expr.length; i++) {
        if (i % 10 == 0 && i != 0) {
          letters[j] = str;
          j++;
          str = '';
        }
        str += expr[i];
    }
    for (let i = 0; i < letters.length; i++) {
        let oneLetter = letters[i].split('');
         if (oneLetter[0] === '*') {
              stringAll += ' ';
              continue;
        }
        let code = '';
        let j = 0;
        while (oneLetter[j] != 1) {
            j++;
        }
        oneLetter = oneLetter.splice(j);
        for (let k = 0; k < oneLetter.length; k = k + 2) {
            if (oneLetter[k] === oneLetter[k + 1]) {
                code += '-';
            }
            else {
                code += '.';
            }
        }
        stringAll += MORSE_TABLE[code];
    }
    return stringAll;
}

module.exports = {
    decode
}