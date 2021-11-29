//negated character sets add ^after the opening bracket and before the characters you do not want to match
// /[^aeiou]/gi matches all characters that are not a vowel
//also matches characters like !, ., [, @, /
//example: create a regex that matches all characters that are not number or vowel
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line