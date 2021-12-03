//sometimes patterns you want ot search for parts of it that may or not exist
//you can specify the existence of an element with a question mark ?
//for example, you can match possible character differences between american or british english
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
//example: create a regex that matches both favorite and favourite
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);