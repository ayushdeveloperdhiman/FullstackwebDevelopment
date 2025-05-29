const obj = {
  a: 1,
  b: 2,
  c: ["0", "1", "2", "B", "J"],
  d: { value: "Val" },
};
// Binding pattern
// const { a, b } = obj;

// console.log(a);
// console.log(b);

// const { a: a1 } = obj;
// console.log(a1);

// Assignment Patter
let b;
({ b: b } = obj);

console.log(b);
