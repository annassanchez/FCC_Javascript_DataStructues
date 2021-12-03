//you can also replace what your searching
//you can search and repace in a string using .replace()
//the inputs for .replace() is first the regex pattern and then the string you want to change
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // returns "The sky is blue."
//you can also access capture groups in the replacement string with dollar signs
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // returns "Camp Code"
//example: replace the initial string "one two three" to "three two one"
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);