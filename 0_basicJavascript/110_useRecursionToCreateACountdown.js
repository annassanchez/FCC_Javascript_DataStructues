//you can use an if else statements to create a recursion function, in order to add consecutive numbers to an array
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(7));
//countdown function: create a function that counts down from a given number
function countdown(m){
    if (m < 1) {
      return [];
    } else {
      const countArray1 = countdown(m - 1);
      countArray1.unshift(m);
      return countArray1;
    }
  }
  console.log(countdown(5));