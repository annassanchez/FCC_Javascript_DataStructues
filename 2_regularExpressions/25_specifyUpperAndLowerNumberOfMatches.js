//you can specify the number of matches you want to get with quantity specifuers
//Quantity specifiers are used with curly brackets {}
//the numbers between curly brackets indicate the lower and upper number of patterns
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
//example: change the regex so that it matches the "Oh no" only when it has 3 or 6 hs
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);