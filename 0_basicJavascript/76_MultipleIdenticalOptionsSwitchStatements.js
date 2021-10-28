//if the break statement is omitted in a switch statement's case, the following case statement are execurted until a break
//theerefore, you can so represent a switch statement with multiple cases:
/*let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}*/
//example: write a switch statement to set the answer to the following ranges:
/*1-3 - Low
4-6 - Mid
7-9 - High*/
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        return "Low";
        break;
      case 4:
      case 5:
      case 6:
        return "Mid";
        break;
      case 7:
      case 8:
      case 9:
        return "High";
        break;
    }
    // Only change code above this line
    return answer;
  }
console.log(sequentialSizes(8));