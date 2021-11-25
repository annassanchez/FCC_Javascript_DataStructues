//to use a function in another js file, you need to export it
export const add = (x, y) => {
    return x + y;
}
//the ame thing can be achieved like this
const add = (x, y) => {
    return x + y;
}

export { add };
//you can export various functions at once
export { add, subtract };
//example: export functions
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export { uppercaseString, lowercaseString };