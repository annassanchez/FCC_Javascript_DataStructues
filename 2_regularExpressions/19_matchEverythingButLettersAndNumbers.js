//\w matchs [A-Za-z0-9_] but to match the opposite you can use \W
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
//example: use shorthand character class \W to count the number of non-alphanumeric characters
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;