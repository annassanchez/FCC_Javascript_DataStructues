//an object inherits irs prototype directly from the constructor function that created it
//example: the bird constructor creates the duck object
function Bird(name) {
    this.name = name;
  }
  
  let duck = new Bird("Donald");
//duck inherits its prototype from the Bird constructor function
//you can show this relationship with the isPrototypeOf method
Bird.prototype.isPrototypeOf(duck); // returns true
//example: use IsPropertyOf to check the prototype of beagle
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle);