//to search for non-whitespace characters, you can use \S (capital s)
//this pattern will not match whitespace, carriage return, tab, form feed, new line characters
//similar to this [^ \r\t\f\n\v]
//example: change the regex to look for multiple non-whitespace characters in a string
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);