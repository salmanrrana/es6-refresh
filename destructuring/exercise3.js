// Use array destructuring, recursion, and the rest/spread operators to create a
// function 'double' that will return a new array with all values inside of it
// multiplied by two.

const numbers = [1, 2, 3];
const roo = [undefined];

function double([number, ...rest]) {
  if (!number) return [];
  return [2 * number, ...double(rest)];
}

double(numbers); // expect -> [2,4,6]
double(roo); // expect -> []
