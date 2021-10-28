//if you have many optiosn to choose from, use a switch statement. this statements test a value that can hav many case statemens that define possible values 
//statements are executed from the first matched case value until a break is encountered
//here's a switch example
/*switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}*/
//example: wirte a switch statement which test val and answer for these conditions:
/*1 - alpha
2 - beta
3 - gamma
4 - delta*/
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
    case 1:
      return "alpha";
      break
    case 2:
      return "beta";
      break
    case 3:
      return "gamma";
      break
    case 4:
      return "delta";
      break
    }
    // Only change code above this line
    return answer;
  }
  
 console.log( caseInSwitch(1));