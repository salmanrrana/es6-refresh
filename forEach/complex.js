// SUM ALL OF THE NUMBERS OF AN ARRAY

// create array of numbers
var numbers = [1, 2, 3, 4, 5];

// create variable to hold the sum
var sum = 0;

// loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
  sum += number;
});

// print the sum variable
sum;
