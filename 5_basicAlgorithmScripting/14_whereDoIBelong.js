//example: return the lowest index art which a value (second argument) should be inserted into an array (first argument) once the array has been sorted
//te returnd value should be a number, the index in which the value should be located
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      }
    }
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);