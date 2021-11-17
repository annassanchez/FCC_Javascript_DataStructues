//ES5 code used .apply() to compute the operation in an array
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
//in ES6 we use the spread operator instad
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
//example: copy the arr1 into the arr2
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
//solution
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);