const multiplier = {
  multiply(numbers, multiplyBy) {
    return numbers.map((number) => number*multiplyBy);
  }
};

console.log(multiplier.multiply([1,2,3],4));
console.log(multiplier.multiply([1,2,3],6));
