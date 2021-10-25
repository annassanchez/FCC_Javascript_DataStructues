//to add more elements to an existing arrays in js, you can use the .pop() funcion
//unlike .push(), .pop() deletes the last element from the array
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//example: assing the last item from myArray to removedFromMyArray and use .pop() to delete the last element from myArray's array
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);