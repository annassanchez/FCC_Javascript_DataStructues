//objects can be though as a key/value storage
//you can use objects to store tabular data within a limited range
//example
const alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    //...
    24:"C",
    25:"B",
    26:"A"
  };
  
  alpha[2];
  alpha[24];
  
  const value = 2;
  alpha[value];
//exercise
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta":"Denver",
      "echo":"Easy",
      "foxtrot":"Frank"
    };
    return lookup[val];
    // Only change code above this line
    return result;
  }
  
  console.log(phoneticLookup("alpha"));
