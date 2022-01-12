//given a positive integer num, return the sum of all fibonacci numbers that are less than or equal to num
//the first two numbers in the fibonacci sequence are 1 and 1
//every additional number in the sequence is the sum of the two previous numbers
//the first numbers of the fibonacci sequence are 1, 1, 2, 3, 5, 8
//for example, sumFibs(10) should return 10 because all odd fibonacci numbers less than or equal to 10 are 1, 1, 2, 3 and 5
function sumFibs(num) {
    let previous = 0;
    let current = 1;
    let result = 0;
    while (current <= num) {
      if (current % 2 !== 0) {
        result += current;
      }
      current += previous;
      previous = current - previous;
    }
  
    return result;
  }
  
console.log(sumFibs(4));