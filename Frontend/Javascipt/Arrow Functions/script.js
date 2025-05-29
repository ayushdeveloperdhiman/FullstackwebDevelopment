// functions in js

// function declaration

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 4));

// function expression

var sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(4, 6));

// Arrow functions'=>'

// var prod = (a, b) => {
//   return a * b;
// };

var prod = (a, b) => a * b;
console.log(prod(6, 3));
