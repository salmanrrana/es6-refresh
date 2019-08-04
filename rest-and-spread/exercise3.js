// Refactor the following function to only use the rest operator.

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

function unshift(array, ...values) {
  return [...values, ...array];
}
