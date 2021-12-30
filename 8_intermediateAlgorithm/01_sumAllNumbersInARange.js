//we'll pass you an array of two numbers
//return the sum of those two numbers plus the sum of all the numbers between them
//the lowest number will not always come first
//for example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
function sumAll(arr) {
    let sum = 0;
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
      sum += i;
    };
    return sum;
  }
  
  sumAll([1, 4]);