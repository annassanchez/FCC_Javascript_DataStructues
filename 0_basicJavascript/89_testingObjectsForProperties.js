//.hasOwnProperty(propname) determine id that a given object has the given name
const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  myObj.hasOwnProperty("top");
  myObj.hasOwnProperty("middle");
  //example: checkObj if the function contains the specific property checkProp
  function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp]
    } else {
      return "Not Found"
    };
    // Only change code above this line
  }