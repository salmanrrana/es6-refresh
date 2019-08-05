// Create another team withing engineeringTeam


const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineering: 'Dave',
}


function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineering;
  //This will create a referene to the testing team in this TeamIterator with
  //team.testingTeam. and we can iterate because of the function from
  //TestingTeamIterator
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  //here we can now iterate over the testing team and see the output when we
  //call yield with the new variable we created
  yield* testingTeamGenerator;
}

function TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name)
}

names
