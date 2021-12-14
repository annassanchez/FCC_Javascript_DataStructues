//example: return an array coonsisting of the largest number from each providd sub-array
//you cxan iterate with a simple for loop and access each member with the array syntax arr[i]
function largestOfFour(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
        for (var j = 0; j < arr.length; j++) {
          if (arr[i][j] > largestNumber) {
            largestNumber = arr[i][j];
          }
        }
        result[i] = largestNumber;
    }
    return result;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);