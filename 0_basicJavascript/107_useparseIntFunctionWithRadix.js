//the parseInt() function specifies the base of the number in a string
//it can be between 2 (binary) and 36
//parseInt(string, radix);
//an example:
const a = parseInt("11", 2);
//create a converToInteger number so that it converts binary numbers to an integer
function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
  convertToInteger("10011");