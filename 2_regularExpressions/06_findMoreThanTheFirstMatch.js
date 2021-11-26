//this is how you are able to only extract a pattern once
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
//to search a pattern more than once, use the g flag
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
//example: use regex to extract the twinkle words
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line