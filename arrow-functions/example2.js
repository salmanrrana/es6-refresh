// TRADITIONAL
// const double = function(num) {
//   return 2 * num;
// }
//
// double(8); // 16

// *******************************

// ARROW function
// const double = (num) => {
//   return 2 * num;
// }

// *******************************

// clearer ARROW function code:
const double = num => 2 * num;
double(8); // 16

// FAT ARROW in practice
const numbers = [2, 4, 6];

numbers.map(number => 2 * number);
