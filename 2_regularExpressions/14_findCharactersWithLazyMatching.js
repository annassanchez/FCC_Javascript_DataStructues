//in regex, a greedy maatch finds the longest possible part of a string that fits the pattern and returns it as a match
//the alternative is called a lazy match finds the smalles possible part of the string that satisfies the regex pattern
// /t[a-z]*i/ will return the greedy match "titani"
// /t[a-z]*?i/ will return the string ti
//example: match <h1> instead of <h1>Winter is coming</h1>
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);