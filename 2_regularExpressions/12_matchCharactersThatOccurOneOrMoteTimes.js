//sometimes you need to match a character that appears one or more times in a row
//you can use the + character to check if that is the case
//the character or patterns has to be present consecutively
//for example /a+/g matches the a in abc; aa in aabc; a a in abab
//example: find matches when the letter s occurs one or more times in Mississippi
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);