function countdown(m){
    if (m < 1) {
      return [];
    } else {
      const countArray1 = countdown(m - 1);
      countArray1.unshift(m);
      return countArray1;
    }
  }
  console.log(countdown(5));

  function rangeOfNumbers(startNum, endNum) {
    if (startNum - endNum === 0) {
        return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers
    }
  };
  console.log(rangeOfNumbers(1, 4));