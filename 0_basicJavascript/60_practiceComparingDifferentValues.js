//as we've seen before, == is the equality operator and === is the strict equality operator
//3 ===  3 is true
//3 === '3' is false
console.log(typeof(3)); //to check the data type, use the method typeof
console.log(typeof('3'));
//example: change teh given function in orther that it returns 'Equal'  when the strings are strictly equal
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));