//you can also use array destructuring as Array.prototype.slice()
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
//example: use destructuring assignment to slice an array
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);