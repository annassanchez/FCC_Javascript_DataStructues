//here's another example of searching for a literal match od the string Kevin
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr); //this test call will return true
//any other forms of Kevin will not match
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
//example: complete the regex to find "Waldo" with a literal match
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);