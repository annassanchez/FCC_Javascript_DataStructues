//in the previous challenge you created a supoertype called Animal that defined behaviours shared by all animals
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
//this and the next challenge will cover how to reuse the methods inside of Animal inside Bird and Dog without defining them again
//It used a technique called inhertitance
//this challenge covers the first step: make an instance of the supertype (or parent)
//you already know one way to create an instance of Animal using the new operator
let animal = new Animal();
//there are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge
//instad, here's an alternative approach without those disadvantages
let animal = Object.create(Animal.prototype);
//Object.create(obj) creates a new object, and sets obj as the new object's prototype
//recall that the prototype is like the "recipe" for creating an object
//by setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any ohter instance of Animal
animal.eat();
animal instanceof Animal;
//the instanceof method here would return true
//example: use Object.create to make two instances of Animal named duck and beagle
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line