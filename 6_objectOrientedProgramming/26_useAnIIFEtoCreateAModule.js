//an immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module
//for example, in an erlier challenge we defined two mixins
function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  }
  function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
  }
  //that can be group to a module as follows
  let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();
  //note that you have an immediately invoked function expression (IIFE)  that returns an object motionModule
  //this returned object contains all of the mixin behaviours as properties of the object
  //te advantage of the module pattern is that all of the motion behaviours can be packaged into a single object that can then be used by other parts of your code
  motionModule.glideMixin(duck);
duck.glide();
//example: create a module named funModule to wrap the two mixins 
//funModule should return an object
/*let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};*/
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
  
  let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
      }
    }
  }
  })();