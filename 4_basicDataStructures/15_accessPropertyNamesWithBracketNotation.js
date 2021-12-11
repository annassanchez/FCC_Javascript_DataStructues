//for accessing to property values, you can also use bracket notation, as we said before
//for example, we have the foods object
//we also have some function that sets the selectedFood and checks in the foods object
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
//this code qill evaluate the value stored in selectedFood variable and return the value of that key
//bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way
//example: the given function receives a scanned item as argument
//return the current value of scannedItem key in the foods object
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    let inventory = foods[scannedItem]
    return inventory
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));