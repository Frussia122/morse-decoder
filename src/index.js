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
    '**********': ' ',
};

function decode(expr) {
    let keys = Object.keys(MORSE_TABLE),
        values = Object.values(MORSE_TABLE);
    let input = expr.match(/\S{10}/ig);
 
  
    let rightInput = input.map(item => {
      let index = item.split("").findIndex((el)=> el === "1");
      if(index >= 0) return item.split("").slice(index);
      return item
    });
  
     rightInput = rightInput.map(item => {
       if(item != "**********") {
       let morse = item.join("").match(/\S{2}/ig);
         return morse.map(element => {return element.replaceAll(/10/g, '.').replaceAll(/11/g, '-')}).join('');
       } else return item
      })

    let answer = rightInput.map(item => {
      for(i=0; i<keys.length; i++) {
        if(item === keys[i]) {
          return values[i];
        }
      }
    })
    
    return answer.join('')
}
