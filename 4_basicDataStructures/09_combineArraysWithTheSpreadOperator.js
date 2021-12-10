//the spread operator can also help to combine arrays
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; // returns ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
//example: modify he given function so that it returns the array ['learning', 'code', 'is', 'fun']
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
console.log(spreadOut());