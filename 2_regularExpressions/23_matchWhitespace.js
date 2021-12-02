//to match whitespace in regex, you can use \s
//also there are other patterns that can be matched by it: carriage return, tab, form feed, and new line character
//similar as the character class [ \r\t\f\n\v]
//example: change the regex to look for multiple whitespace characters in a string
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);