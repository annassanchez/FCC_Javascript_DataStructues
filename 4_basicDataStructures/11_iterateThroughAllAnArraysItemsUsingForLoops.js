//when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need or to manipulate an array based on which data items meet a certain set of criteria
//js offers several built in methods to achieve different results (evey(), forEach(), map())
//the technique which is most flexible and offers the greatest amount of control are for loops
function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]); // returns [12, 14, 80]
  //using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created
  //we have easily and programatically determined which data items are greater than 10
//example: modify the given function, so that it returns the filtered version of the array and the ensted array with elem removed
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));