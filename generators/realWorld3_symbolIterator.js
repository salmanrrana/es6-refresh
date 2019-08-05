//
// const testingTeam = {
//   lead: "Amanda",
//   tester: "Bill",
//   [Symbol.iterator]: function*() {
//     yield this.lead;
//     yield this.tester;
//   }
// };
//
// const engineeringTeam = {
//   testingTeam,
//   size: 3,
//   department: "Engineering",
//   lead: "Jill",
//   manager: "Alex",
//   engineer: "Dave",
//   [Symbol.iterator]: function* () {
//     yield this;
//   }
// };
//
// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//   yield* team.testingTeam;
// }
//
// const names = [];
//
// for (let name of TeamIterator(engineeringTeam)) {
//   names.push(name);
// }
//
// names;

// ********************************************************
// CLEANED UP

const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
  [Symbol.iterator]: function*() {
    yield this;
  }
};

const names = [];

for (let name of engineeringTeam) {
  names.push(name);
}

names;
