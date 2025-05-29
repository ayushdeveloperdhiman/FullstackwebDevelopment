const students = ["Tina", "Raj", "Bobby", "Seema", "Alex", "Sita", "Shyam"];
//  For in --- loop

// for (var i in students) {
//   console.log(`Roll No. ${Number(i) + 1}:${students[i]}`);
// }

// for of --- loop
// for (var student of students) {
//   console.log(student);
// }

// Break and Continue
const input = [11, 32, 12, 45, 65, 94, 7, 78, 10, 100, 131, 67, 81, 92, 53];
const evenNumber = [];
for (let ele of input) {
  if (ele % 2 !== 0) {
    continue;
  }
  evenNumber.push(ele);
  if (evenNumber.length === 5) {
    break;
  }
  console.log(evenNumber);
}
