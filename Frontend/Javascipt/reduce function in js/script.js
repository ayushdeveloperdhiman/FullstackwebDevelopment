//  reduce function in js

// reduce(redfn, initial value)

// function redfn(accuulator, currentValue, currentIndex, arr)

const inputs = [2, 3, 4, 5, 6, 7];

const sum = inputs.reduce((total, num, index) => {
  console.log(index, total);

  return total + num;
});

console.log(`Total: ${sum}`);
