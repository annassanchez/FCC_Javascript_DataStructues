//ES6 adds some nice support for easily defining object literals -- object porperty shorthand
const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });
//getMousePorperties can also be written with one x
getMousePosition = (x, y) => ({ x, y });
//example: use object property shorthand for the given function
//initial status
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // Only change code above this line
  };
//solution
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {name, age, gender}
    // Only change code above this line
  };