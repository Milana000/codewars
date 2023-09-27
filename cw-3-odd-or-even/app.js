"use strict";

function oddOrEven(arr) {
  let sum = arr.reduce(function (a, b) {
    return a + b;
  });

  if (sum % 2 === 0 || sum === 0) {
    return "Sum is even";
  } else {
    return "Sum id odd";
  }
}

console.log(oddOrEven([5, 4]));

/* function oddOrEven(array) {
    return array.reduce((a,b)=>a+b,0) % 2 ? "odd" : "even"
} */
