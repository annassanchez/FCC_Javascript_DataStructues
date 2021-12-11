//objects are a collection of key-value pairs
//they are pieces of data (values) mapped to unique identifiers called properties (keys)
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };
//the above ode identifies a tekken videogame character object
//it has three properties, that map to a specific value
//to add another one, using dot notation:  
tekkenCharacter.origin = 'South Korea'; 
//to add more properties with bracket notation:
tekkenCharacter['hair color'] = 'dyed orange'; //required when the key has an space on its name
//you can also add a property by assigning it to a variable
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
//this is how the object looks like
console.log(tekkenCharacter);
//example: add bananas, grapes and strawkerries to the given js object
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13;
  foods['grapes'] = 35;
  const strawberries = 'strawberries';
  foods[strawberries] = 27;
  // Only change code above this line
  
console.log(foods);