var numbers = [10, 20, 30];

var sum = 0;

// FOR LOOP IMPLEMENTATION
//for (var i = 0; i < numbers.length; i++) {
//  sum += numbers[i]
// }

numbers.reduce(function(sum, number) {
  return sum + number;
}, sum);
