//find the missing letters range and return it
//if all letters are present in the range, return undefined
function fearNotLetter(str) {
    let currentCharCode = str.charCodeAt(0);
    let missing = undefined;
    str
      .split("")
      .forEach(letter => {
        if (letter.charCodeAt(0) === currentCharCode) {
          currentCharCode++;
        } else {
          missing = String.fromCharCode(currentCharCode);
        }
      });
      return missing;
  }
  
  fearNotLetter("abce");