//wirte a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays
//in other words, all values present from all arrays should be included in their original order, but with no suplicates in the final array
//the unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order
//check the assertion test for examples
function uniteUnique(...arrays) {
    const flatArray = [].concat(...arrays);
    return [...new Set(flatArray)];
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);