//you can extract the actual matches you found with the .match() method
//to use it, apply the method on a string and pass the regex through parentheses
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
//watch out: the syntax is different from the .test() one
'string'.match(/regex/);
/regex/.test('string');
//example: apply the .match() method to extract the string 'coding'
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line