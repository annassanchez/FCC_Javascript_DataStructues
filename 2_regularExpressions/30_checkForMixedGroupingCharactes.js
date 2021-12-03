//to check for groups of characters use parentheses ()
//for example, to find a match either Penguin or Pumpkin in a string: /P(engu|umpk)in/g
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); // it returns true
//example: fix the regex so that it matches both Franklin Roosevelt or Eleanor Roosevelt
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works