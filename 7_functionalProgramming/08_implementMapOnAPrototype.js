//as you seen from applying Array.prototype.map(), or simple map() earlier, the map method returns an array of the same length as the one it was called on
//it also doesn't alter the original array, as long as its callback function doesn't
//in other words, map is a pure function, and its ouptput depends solely on its inputs
//plus, it takes another function as its argument
//you might learn a lot about the map method if you implement your own bersion of it
//it is recommended you use a for loop or Array.prototype.forEach()
//example: write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map()
//you should not use the built.in map method
//the Array instance can be accessed in the myMap method using this
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});