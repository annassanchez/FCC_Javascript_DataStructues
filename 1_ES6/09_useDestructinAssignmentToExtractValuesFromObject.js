//ES5 assignment:
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
//ES6 assignment with destructuring syntax
const { name, age } = user;
//replace the assignments with an equivalent destructurin assignment
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line
//solution
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow } = HIGH_TEMPERATURES;
  
  // Only change code above this line