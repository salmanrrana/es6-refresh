//common whiteboarding
// balanced Parenthesis character

function balancedParens(string) {
  // receiving a string, but the reduce helper only works on an array
  // convert the string into an array
  return !string.split("").reduce(function(previous, char) {
    //this is solving if the parens go into the negative
    // this will catch if it is unbalanced
    if (previous < 0) {
      return previous;
    }
    // create a counter that starts at 0 (as seen at end of function)
    //if open parens -> add 1. if closing paren subtract by 1.
    if (char === "(") {
      previous++;
    }
    if (char === ")") {
      previous--;
    }

    return previous;
  }, 0);
}

balancedParens("((asdfasdfgsfag((");
balancedParens(")))))((((((((((((((((");
