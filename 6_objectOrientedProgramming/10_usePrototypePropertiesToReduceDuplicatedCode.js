//since numLegs will probably have the same value for all instances of Bird, you esentially have a duplicated variable of numLegs inside each Bird instance
//this may not be an issue whn there are oinly two instances -- not the same with millions of them
//a better way is to use the prototype of Bird
//properties in the prototypoe are shared among ALL distances of Bird
//here's how to add numLegs to the Bird prototype
Bird.prototype.numLegs = 2;
//al instances of Bird have noe the numLegs property
console.log(duck.numLegs);
console.log(canary.numLegs);
//all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects
//note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype
//every object in js has a prototype property thich is part of the constructor function that created it
//example: add a numLegs property to the prototype of Dog
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");