"use strict";

var multiplier = {
  multiply: function multiply(numbers, multiplyBy) {
    return numbers.map(function (number) {
      return number * multiplyBy;
    });
  }
};

console.log(multiplier.multiply([1, 2, 3], 4));
console.log(multiplier.multiply([1, 2, 3], 6));
