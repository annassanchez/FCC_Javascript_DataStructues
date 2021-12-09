//example: the function raiseToPower raises a base to its exponent
//fix so the power is the expected 8
function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);