// Higher Order Functions

const inputs = [2, 5, 7, 8, 9, 12, 13];
// function square(input) {
//   const squared = [];
//   for (let num of input) {
//     squared.push(num * num);
//   }

//   return squared;
// }

// function cubic(input) {
//   const cubes = [];
//   for (let num of inputs) {
//     cubes.push(num * num * num);
//   }

//   return cubes;
// }

// console.log(square(inputs));
// console.log(cubic(inputs));

// Higher Order Function(DRY)

function calculate(input, operation) {
  const output = [];
  for (let number of input) {
    output.push(operation(number));
  }
  return output;
}

function square(number) {
  return number * number;
}

function cubic(number) {
  return number * number * number;
}

console.log(`Cube: ${calculate(inputs, cubic)}`);
console.log(`Squre: ${calculate(inputs, square)}`);
