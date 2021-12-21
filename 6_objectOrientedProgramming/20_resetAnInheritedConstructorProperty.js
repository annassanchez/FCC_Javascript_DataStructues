//when an object inherits its prototype from another object, it also inherits the supertype's constructor property
//example:
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
//duck and all instances o bird should show that they were constructed by Bird and not Animal
//to do so, you can manually set the constructor proerty of bird to the Bird object
Bird.prototype.constructor = Bird;
duck.constructor
//example: fix the code so duck.coinstructo and beagle.constructor return their constructors
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
let duck = new Bird();
let beagle = new Dog();
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
duck.constructor
beagle.constructor