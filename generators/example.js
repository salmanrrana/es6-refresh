// generators syntax is to use the * after function orbefore the function name
function* numbers() {
  yield;
}

// here we create a variable called gen that will reference our generator
const gen = numbers();
gen.next(); // exptected output -> { "done": false}
gen.next(); // exptected output -> { "done": true}
