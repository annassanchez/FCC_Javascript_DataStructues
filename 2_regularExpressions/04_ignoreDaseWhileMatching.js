//if you want to match case differences, use the i flag
//you need to follow this syntax /ignorecase/i
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);