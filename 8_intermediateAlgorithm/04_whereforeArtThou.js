//make a function that looks through an array of objects (first argument) and returns an array of all objects that have matchingname and value pairs (second argument)
//each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array
function whatIsInAName(collection, source) {
    var sourceKeys = Object.keys(source);
    // Only change code below this line
    return collection.filter(function(obj) {
      for (var i = 0; i < sourceKeys.length; i++) {
        if (
          !obj.hasOwnProperty(sourceKeys[i]) ||
          obj[sourceKeys[i]] !== source[sourceKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
    // Only change code above this line
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });