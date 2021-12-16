//objects can have a special type of property called method
//methods are properties that are functions
//this adds different behaviour to an object
let duck = {
	name: "Aflac",
	numLegs: 2,
	sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
//the example adds the sayname method, which is a function that returns a sentece giving the name of the duck
//notice that the method accessed the name property in the return statement using duck.name
//the next challenge will cover another way to do this
//example: using the dog object, give it a method called sayLegs. the method should return the given string.
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();