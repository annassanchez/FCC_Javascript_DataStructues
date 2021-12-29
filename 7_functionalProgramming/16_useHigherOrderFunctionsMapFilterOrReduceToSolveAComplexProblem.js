//now that you have worked through a few challenges using higher-order functions like map(), filter(), reduce(), you now get to apply to solve a more complex challenge
//example: complete the code for the sqareList function using a combination of map(), filter(), reduce()
//the function should return a new array containing the squares only teh positive integers (not decimals)
//note: dont' use for or while loops or the forEach function
const squareList = arr => {
    // Only change code below this line
    return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map( num => Math.pow(num, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);