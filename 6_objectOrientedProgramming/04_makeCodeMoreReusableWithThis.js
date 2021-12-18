//the last challenge introduced a method to the duck object
//it used duck.name dot notation to access the value for the name property within the return statement
//sayName: function() {return "The name of this duck is " + duck.name + ".";}
//while this is a valid way to access the obhject's property, there is a pitfall here
//if the variable name changes, any code referencing the original name would need to be updated as well
//in a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error
//a way to avoid these issues is by using the `this` keyword
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
  };
//this is a deep topic, and the above example is only the way to use it
//in the current context, this refers to the object that the method is associated with: duck
//if the object's name is changed to mallard, it is not necessary to find all the eferences to duck in the code
//it makes the code reusable and easier to read
//example: modify dog.sayLegs method to remove any references to dog
let duck = {
	name: "Aflac",
	numLegs: 2,
	sayName: function() {return "The name of this duck is " + this.name + ".";}
};
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();