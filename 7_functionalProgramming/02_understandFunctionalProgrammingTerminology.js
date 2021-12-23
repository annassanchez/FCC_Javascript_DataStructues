//FCC Team now wants two types of tea
//we'll need to revisit the getTea function from last challenge to handle various tea request
//we can modify getTea to accept a function as a parameter to be able to change the tpe of tea it prepares
//this makes getTea more flexible, and gives the programmer more control when client requests change
//first cover some terminology
//- callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. you may have seen them passed to other methods, for example in filter, the callback function tells JS the criteria for how to filter an array
//functions can be assigned to a variable, passed into another funcior, returned from another function just like any other normal value, are called firsst class functions -- in js al functions are first class functions
//- higher order functions -- the functions that take a function as an argument or return a function as a return
//- lamda -- when functions are passed in to or returned from another function, then those functions which were passed or returned
//example: prepare 27 cups of green tea and 13 cups of black tea and store them in the given variables
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);