//lookaheads are patterns that tell js to look-ahead in your string to check for patterns further along
//this can be useful to search for multiple patterns in the same string
//positive lookaheads: (?=...) where ... is the rewuired part that is not matched
//negative lookaheads: (?!...) where ... is the pattern that you do not want to be there
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); //matches ["q"]
noquit.match(qRegex); //matches ["q"]
//a more practical example: a password checker that looks for between 3 or 6 charachters and at least 1 number
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
//example: use lookaheads to match passwords that are greater than 5 characters long and 2 consecutive digits
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);