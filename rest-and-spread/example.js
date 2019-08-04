//reduce function to add numbers
// function addNumbers(numbers) {
//   return numbers.reduce(function(sum,number) {
//     return sum + number
//   }, 0)
// }

// refactored reduce function with arrow function
// function addNumbers(numbers) {
//   return numbers.reduce((sum,number) => {
//     return sum + number
//   }, 0)
// }
//
// addNumbers([1,2,3,4,5])

// what if we want to have multiple arguments to this
// instead of passing in an array like this:
// function addNumbers(a,b,c,d,e) {
//   //Then we would have to do this:
//   const numbers = [a,b,c,d,e];
//   return numbers.reduce((sum,number) => {
//     return sum + number
//   }, 0)
// }
//
// addNumbers(1,2,3,4,5)

// Using REST operator to make it less tedious to consider the number of
// arguments being passed in
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7);

// the rest operator knows that we are going to receive some unknown
// amount of arguments.
