//splice() can take up to three parameters
//this can be useful for quickly switching out an element or a set of them for another
const numbers = [10, 11, 12, 12, 15];
console.log(numbers);
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
//example: a function should remove the first two elements and add 'DarkSalmon', 'BlanchedAlmond'
function htmlColorNames(arr) {
    // Only change code below this line
    const startIndex = 0;
    const deleteAmount = 2;
    arr.splice(startIndex, deleteAmount, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));