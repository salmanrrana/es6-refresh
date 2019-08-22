var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// expect an output of --> ['red', 'yellow', 'blue']

primaryColors.reduce(function(previous, primaryColor) {
  //take the initial empty array at end of function
  // and assign it as previous. Push value into empty array
  previous.push(primaryColor.color);
  //now we are returning the value of previous
  return previous;
}, []);

// Testing
//Testing again
//another test
//another test 
