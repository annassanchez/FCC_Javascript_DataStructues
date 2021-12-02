// the shorthand character class to match non-digit characters is \D
//example: use the shorthand character class for non-digits \D to count how many non-digits are
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;