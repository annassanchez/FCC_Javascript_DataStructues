//as you have seen, behaviour is shared through inheritance
//there are cases when inheritance is not the best solution
//inheritance does not work well for unrelated objects like Bird and Airplane
//they both can fly but a Bird is not a type of Airplne and vice versa
//for unrealeted objects is better to use mixins
//a mixin allows other objects to use collection of functions
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };
//flyMixin takes any object and gives it the fly method
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);
//here bird and plane are passed into flyMixin, which then assigns the fly function to each object
//now bird and plane can both fly
bird.fly();
plane.fly();
//the console would display the string Flying, wooosh! twice
//example: create a mixin named glideMixin that defines a method named glide
//then use the glideMixin to gve both bird and boat the ability to glide
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding, wooosh!");
    }
  };
  glideMixin(bird);
  glideMixin(boat);