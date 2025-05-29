// map() function in js

//map(currentElement, index, arr)

const inputs = [2, 3, 4, 5, 6];
// const squareArray = inputs.map(function (currentElement) {
//   return currentElement ** 2;
// });

const squareArray = inputs.map((currentElement) => currentElement ** 2);

console.log(squareArray);

const cubeArray = inputs.map((currentElement) => currentElement ** 3);

console.log(cubeArray);
