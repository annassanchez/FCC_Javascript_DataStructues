//to remove keys from an object, you can use the remove keyword and dot notation:
delete foods.apples;
//exaple: delete the oranges, plums and strawberries keys from the given object
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);