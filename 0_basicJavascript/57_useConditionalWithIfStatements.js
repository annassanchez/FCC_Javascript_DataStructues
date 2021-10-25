//if statements are used to make decision on code
//if statements tells js to execte the code in curly braces under certain conditions -- booleans
function test (myCondition) {
    if (myCondition) {
       return "It was true";
    }
    return "It was false";
}
console.log(test(true));
console.log(test(false));
//example: create an if statement inside the function
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
    // Only change code above this line
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));