//one of the simplest and most widely known ciphers is a Ceaser cipher, also known as shift cipher
//in a shift cipher the meanings of the letters are shifted by some amount
//a common modern use is the ROT13 cipher, where the values of letters are shifted 13 positions a -> n, b -> o
//write a function which takes a rot13 encoded string as input and return de decoded string
//all letters must be uppercase
//do not transfom any non-alphabetical character (spaces, punctuation...) but do pass them on
function rot13(str) {
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return str.replace(/[a-z]/gi, letter => cipher[alpha.indexOf(letter)]);
  }
  
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
