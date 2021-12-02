//you can specify the exact number of patterns with the exact quantity in curly brackets
//for example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
//example: match the word Timber when it has 4 m's
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);