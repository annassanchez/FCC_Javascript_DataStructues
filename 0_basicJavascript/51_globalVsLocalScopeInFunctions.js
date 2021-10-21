//it is possible to have local and global variables in the same name
//the local variable takes precedence over the global one
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
//example: change local variable myOutfit to override the value of outerWear
// Setup
var outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}
myOutfit();