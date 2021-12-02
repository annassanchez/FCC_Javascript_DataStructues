//to match only digits or numbers use the shorthand character class \d
//use the shorthand cahracter class \d to count how many digits are in movie titles
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;