//ES6 provides a new syntax to create classes
//in ES5, we usually define a constructor function and use the new keyword to instantiate an object
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
//in ES6 the class syntax simply replaces the constructor function creation
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');
//example: use the class keyword and write a constructor to create the vegetable class
// Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'