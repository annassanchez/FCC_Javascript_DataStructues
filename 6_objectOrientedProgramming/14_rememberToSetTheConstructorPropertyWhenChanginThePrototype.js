//there is a side effect of manually setting the prototype to a new object
//it erases the constructor property
//thois property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false restults
duck.constructor === Bird; // false
duck.constructor === Object; // true
duck instanceof Bird; // true
//to fix this, whenever a prototype is manually set to a new object, remember to define the constructor property
Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };
//example: define the constructor property on the Dog prototype
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };