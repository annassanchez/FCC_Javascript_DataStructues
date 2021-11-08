//recursion is the concept that a function can be expressed by itself
//start thinking about the following task: a function that multiplies the first n elements of an array to create the product of those elements
function multiply(arr, n) {
	let product = 1;
	for (let i = 0; i < n; i ++) {
		product *= arr[i];
	}
	return product;
} 
//however it also can be written in terms of itself and no need to use a loop
function multiply () {
	if (n <= 0) {
		return 1;
	} else {
		return multiply(arr, n - 1) * arr[n - 1];
	}
}
//write a recursive function sum(arr, n) that returns the sum of the first n elements of an array
function sum(arr, n) {
    // Only change code below this line
      if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }