//all objects in js (a few exceptions) have a prototype
//also an object's prototype itself its an object
function Bird(name) {
    this.name = name;
  }
  
  typeof Bird.prototype;
//prototype is an object, so it can have its own prototype
//in this case, the prototype of Bird.Prototype is Object.prototype
Object.prototype.isPrototypeOf(Bird.prototype);
//how is this useful? you may recall the hasOwnProperty method from before
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
//hasOwnProperty method is defined in Object.prototype, which can be accessed by Object.prototype, which then can be accessed by duck
//this is an example of the prototype chain
//in this prototype chain, Bird is the psupertype fro duck, shile duck is the subtype
//object is a supertype for both Bird and duck
//object is a supertype for all objects in js
//any objkect can use the hasOwnProperty method
//example: modify the code to show the correct prototype chain
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);