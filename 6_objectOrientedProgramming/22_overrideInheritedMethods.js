//in previous challenges, you learned tha an object can inherit its behaviour (methods) from another object by referrencing its prototype object
ChildObject.prototype = Object.create(ParentObject.prototype);
//then chilgObject received itw oen methods by cahining them onto its prototype:
ChildObject.prototype.methodName = function() { };
//it's possible to override a inherited method
//it's done the same way -- by adding a method to ChildObject.prototype using the same method name as the one to override
//here's an example of Bird overriding the eat() method inherited for animal
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
let duck = new Bird();
duck.eat()
//js will search for the method on the prototype chain of duck
//1. duck -> eat() defined? no
//2. Bird -> eat() defined? yes. execute it and stop searching
//3. Animal -> eat() defined? is defined, but js stopped searching before reaching this level
//4. Object -> eat() defined? js stopped searching before reaching this level
//example: override the fly() method for penguin so that it returns the given string
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());