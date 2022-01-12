//check if the predicate (second argument) i struthy on all elements of a collection (first argument)
//in other words, you are given an array collection oj objects
//the predicate pre will be an object poperty and you need to return true it its value is truthy
//otherwise, return false
//in js, truthy values are values that translate to true when evaluated in a boolean context
//remember, you can access the object proeprties throguh either dot notation or [] notation
function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");