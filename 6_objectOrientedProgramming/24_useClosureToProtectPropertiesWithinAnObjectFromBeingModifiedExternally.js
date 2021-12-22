//in the previous challend, bird hat a public property name
//it is considered public because it can be accessed and changes outside of bird's definition
bird.name = "Duffy";
//therefore any part of your code can easily change the name of bird to any value
//think about things like passwords or bank accounts being easily changeable -- that could cause a lot of issues
//the simplest way to make this public property private is by creating a variable within the constructor function
//this changes the scope of that varaible globally
//this way, the variable can only be eaily accessed and changed by methods also within the constructor function
function Bird() {
    let hatchedEgg = 10;
  
    this.getHatchedEggCount = function() { 
      return hatchedEgg;
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount();
//there getHatchedEggCount is a privileged methodm because it has access to the private variable hatchedEgg
//this is possible because hatchedEgg is declared in the same context as getHatchedEggCount
//in js, a function always hass access to the context in which it was created -- this is called closure
//example: change how weight is declared in the Bird function so it is a rpivate variable
//create a method getWeight that returns the value of weight
function Bird() {
    let weight = 15;
    this.getWeight = function() { 
      return weight;
    };
  }