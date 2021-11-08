//within a multi-dimensional array, you can iterate within the sub-arrays
const arr = [
	[1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}
//function multiply all should return the product of all the numbers in the sub-arrays
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));