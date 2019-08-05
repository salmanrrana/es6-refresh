const engineeringTeam = {
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineering: "Dave"
};

// want to use generators to figure out how to iterate over the object
// we only want to iterate over the employees

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineering;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;
