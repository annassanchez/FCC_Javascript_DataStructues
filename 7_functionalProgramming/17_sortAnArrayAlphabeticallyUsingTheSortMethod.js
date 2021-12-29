//the sort methods sorts the elements of an array according to the callback function
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
console.log(ascendingOrder([1, 5, 2, 3, 4])); // returns [1, 2, 3, 4, 5]
function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's'])); // returns ['z', 's', 'l', 'h', 'b']
//js default sorting method is by string unicode point value, which may return unexpected results
//therefore, it is encouraged to provide a callback function to specify how to sort the array items
//when such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFuncion: if compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b
//if compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a
//if compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged
//example: use the sort in the alphabeticalOrder function to sort the elements of arr in alphabetical order
//the function should return the sorted array
function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort(function(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
    // Only change code above this line
  }
  
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));