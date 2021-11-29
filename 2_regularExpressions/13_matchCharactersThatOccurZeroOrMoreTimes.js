//there's an option to match characters that occur zero or more times: *
//the three match calls would return the values ["goooooooo"], ["g"], and null
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
//example: create a regex that matches Aaaaaaaaaaaaaaaarrrgh!
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);