//a constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods
//example: Bird is a constructor that inherits its prototype from Animal
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
//in addition to what's inherited from Animal, you want to add behaviour that is unique to Bird objects
//Here, Bird will get a fly() function
//functions are added to Bird's prototype the same way as any constructor function
Bird.prototype.fly = function() {
    console.log("I'm flying!");
  };
//now instances of Bird will have both eat() and fly() methods
let duck = new Bird();
duck.eat(); // displays "nom nom nom" in the console
duck.fly(); // displays "I'm flying"
//example: add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog
//then add a bark() mehtod to the Dog object so taht beagle can both eat() and bark()
function Animal() { }
Animal.prototype.eat = function() { 
  console.log("nom nom nom"); 
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};
// Only change code above this line

let beagle = new Dog();