//functional programming is a style of programming where solutiions are simple, isolated functions without any side effects of the function scope: INPUT -> PROCCESS -> OUTPUT
//functional programming is about:
//1. Isolated functions -- there is no dependance on the estate of the program, which includes global varaibles that are subject to change
//2. pure functions -- the same input always gives the same output
//3. functions with limited side effects -- any changes or mutations to the state of the program outside the function are carefully controlled
//example: in the code editor, the prepareTea and getTea functions are ready
//call the getTea function to ger 40 cups of tea for the team and store them in the given variable
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line