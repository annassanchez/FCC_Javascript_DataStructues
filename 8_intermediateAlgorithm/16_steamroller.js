//flatten a nested array
//you must account for varying levels of nesting
function steamrollArray(arr) {
    const flattenArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArray.push(...steamrollArray(arr[i]));
      } else {
        flattenArray.push(arr[i]);
      }
    }
    return flattenArray;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);