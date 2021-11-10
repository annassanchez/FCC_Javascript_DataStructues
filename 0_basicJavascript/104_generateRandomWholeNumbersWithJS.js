//you can also generate random whole numbers
//1. use Math.random()
//2. multiply that random number by 20
//3. use Math.floor() to round the number to its nearest whole number, like this:
//Math.floor(Math.random() * 20);
function randomWholeNum() {

    // Only change code below this line
    var result = 0;
      while (result === 0) {
        result = Math.floor(Math.random() * 10);;
      }
      return result;
  }