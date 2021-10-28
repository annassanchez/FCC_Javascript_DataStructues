//in switch statements you may not be able to specify all possible values as case statements
//in taht case, you add a default statement -- kind of like the else in the if/else chain
/*switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}*/
//example: write a switch statement for these conditions:
/*a - apple
b - bird
c - cat
default - stuff*/
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case "a":
        return "apple";
        break
      case "b":
        return "bird";
        break
      case "c":
        return "cat";
        break
      default:
        return "stuff";
        break
    }
    // Only change code above this line
    return answer;
}

console.log(switchOfStuff("a"));