//in js there's no need to name functions -- just give the return of the function
const myFunc = function() {
    const myVar = "value";
    return myVar;
  }
//arrow function syntax
  const myFunc = () => {
    const myVar = "value";
    return myVar;
  }
//without function body and no return value
const myFunc = () => "value";
//exercise
const magic = () => new Date();