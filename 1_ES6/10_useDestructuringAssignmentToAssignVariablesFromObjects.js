//ES5 assignment for variables in objects
const user = { name: 'John Doe', age: 34 };
//ES6 assignment for variables in objects
const { name: userName, age: userAge } = user;

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const { today: highToday, tomorrow: highTomorrow  } = HIGH_TEMPERATURES;
  
  // Only change code above this line