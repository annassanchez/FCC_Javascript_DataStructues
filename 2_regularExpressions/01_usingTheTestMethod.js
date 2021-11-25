//regular expressions are used in programming languages to match part of stings
//js has multiple ways to use regexes
//one way yo test a regex is using .test() method
//this method takes the regex, applies it to a string (placed between parentheses) and returns true o false if your pattern finds something
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
//example: apply regex to myRegex on the strin myString
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line