//to remove elements in the middle or more than one element at once use the method splice()
//for example
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2,2); //result ['today', 'was', 'great']
//two elements are removed
//splice() not only modifies the array it's being called on, but returns a new array
let array2 = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array2.splice(3,2); //returns ['really', 'happy']
//example: use splice to remove elements from arr, so that it contains elements that sum 10
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4)
// Only change code above this line
console.log(arr);