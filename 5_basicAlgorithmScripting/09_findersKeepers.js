//example: create a function that looks through an array and returns the first element in it that passes a 'truth test'
//this means that a given element x, the 'truth test' is passed if func(x) is true
//if no element passes the test return undefined
function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));