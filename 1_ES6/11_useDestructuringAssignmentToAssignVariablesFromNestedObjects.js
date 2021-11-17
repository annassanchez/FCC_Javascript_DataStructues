//the same principles from the previous two lessons to destructure values from nested objects
//es5 case
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };
//es6 case
const { johnDoe: { age, email }} = user;
//another example of how you can assign an objects properties' values to variables with different names
const { johnDoe: { age: userAge, email: userEmail }} = user;
//example: replace the two es5 assignments with an equivalent destructuring assignment
//initial code
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const lowToday = LOCAL_FORECAST.today.low;
  const highToday = LOCAL_FORECAST.today.high;
  
  // Only change code above this line
//solution
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
  
  // Only change code above this line