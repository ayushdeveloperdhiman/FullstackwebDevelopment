//  filter()

const inputs = [4, 10, 2, -3, -2, 5, 9, -1];

// console.log(inputs.filter(noNegative));

// function noNegative(num) {
//   return num >= 0;
// }

const positive = inputs.filter((element) => element >= 0);
console.log(`Original arra: ${inputs}`);
console.log(`Positive value only: ${positive}`);
