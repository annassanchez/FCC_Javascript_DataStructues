//this Bird constructor defiens two properties: name and numLegs
function Bird(name) {
    this.name  = name;
    this.numLegs = 2;
  }  
  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");
//name nad numLegs are own properties, because they are defined directly on the instance object
//duck and canary eaxh have its own separate copy of these properties
//in fact every instance of Bird will have its own copy of this properties
//the following code adds all of the own properties of duck to the array ownProps:
let ownProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);
//example: add the properties of canary to the array ownProps
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);