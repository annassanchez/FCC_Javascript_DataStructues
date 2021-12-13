//example: create a function that returns the factorial of a given number 
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++){
      product *= i;
    }
    return product;
  }
  
  factorialize(5);