//a common pattern while working with arrays is when you want to remove items and keep the rest of the array
//js offers the splice method for this, whichtakes arguments for the idex of where to start removing items, then the number of items to remove
//if the second argument is not provided, the default is to remove items through the end
//however, the splice method mutates the original array it is called on
//here's an example
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
//the splice returns the string London and deletes it from the cities array
//cities would be ["Chicago", "Delhi", "Islamabad", "Berlin"]
//as we saw in the last challenge, the slice method does not mutate the original array, but returns a new one which can be saved into a variable
//recall that the slice method takes two arguments for the indices to begin and end the slice (non-inclusive end) and returns those items in a new array
//using the slice method instead of splice helps to avoid any array-mutating side effects
//example: rewrite the function nonMutatingSplice by using slice instead of splice
//it should limit the provided cities array to a length of 3, and return a new array with only the first three items
//do not mutate the original array porovided to the function
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);