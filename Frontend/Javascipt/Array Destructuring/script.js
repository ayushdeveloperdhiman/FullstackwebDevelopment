const fruits = ["Apple", "Mango", "Kiwi", "Berry", "Banana", "Lichi"];

// Binding Pattern
// const [A, , K] = fruits;
// console.log(A, K);

const [A, M, ...[Ki, be, ba]] = fruits;
console.log(Ki, ba, be);
