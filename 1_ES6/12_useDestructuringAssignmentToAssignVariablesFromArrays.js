//destructuring an array gets can assign variables according to the position in the array
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // [1, 2]
//another example
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // [1, 2, 5]
//make a = b and b = a
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];