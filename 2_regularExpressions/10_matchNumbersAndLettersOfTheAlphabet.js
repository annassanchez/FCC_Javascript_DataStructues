//using hyphen (-) to match a range of characters is not limited to letters -- it also works with numbers
// /[0-5]/ matches any number between 0 and 5,  included
//also you can combine a range of letters and a range of numbers
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
//example: create a regex that matches a letter between h and s and range of numbers between 2 and 6
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line