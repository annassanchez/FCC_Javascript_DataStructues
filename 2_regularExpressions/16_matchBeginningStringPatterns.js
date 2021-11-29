//we used ^before to negate a character in the form [^thingsThatWillNotBeMatched]
//outside the character set, the caret is used to look up for patterns at the beginning of a string
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
//example: match the first Cal in the string rickyAndCal
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);