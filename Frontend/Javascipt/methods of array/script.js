const teams = ["CSK", "RCB", "MI", "LSG"];

//push()
// teams.push("GT");
// console.log(teams);

//unshift()
// teams.unshift("DD");
// console.log(teams);

//pop()
// teams.pop();
// console.log(teams);

//shift()
// teams.shift();
// console.log(teams);

//indexOf()
const rcbIndex = teams.indexOf("MI");
// console.log(rcbIndex);

// includes()
const rcbInclude = teams.includes("RCB");
// console.log(rcbInclude);

// slice() and splice()
//slice()
// console.log(teams);
const sliceTeams = teams.slice(2);
// console.log(sliceTeams);
// console.log(teams);

const negSliceTeams = teams.slice(-1);
// console.log(negSliceTeams);

//splice()
// console.log(teams);
teams.splice(2, 0, "GT", "GT1");
// console.log(teams);
teams.splice(3, 1);
// console.log(teams);

//concat()
const teams2 = ["India", "Australia", "New Zealand"];
const mergeTeam = teams.concat(teams2);
console.log(mergeTeam);
