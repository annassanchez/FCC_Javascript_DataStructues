//the split method splits a astring into an array of strings
//it takes an argument for the delimiter, which can be a character to use to break up the string or a regular expressions
//for example, if the delimiter is a space, you can get an array of words, and if the delimiter is an empty string, you can get an array of each character in the string
const str = "Hello World";
const bySpace = str.split(" ");// returns ["Hello", "World"]

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/); // returns ["How", "are", "you", "today"]
//example: use the split method inside the splitify function to split str into an array of words
// the function should return the array
//the words are not always separated by spaces, and the array should not contain punctuation
function splitify(str) {
    // Only change code below this line
    return str.split(/\W/);
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");