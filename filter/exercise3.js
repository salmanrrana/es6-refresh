// This is a hard one!  Create a function called 'reject'.  Reject should work in
// the opposite way of 'filter' - if a function returns 'true', the item should
// *not* be included in the new array.  Hint: you can reuse filter.

var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  return array.filter(num => !iteratorFunction(num));
}

function FindNumberGreaterThanFifteen(num) {
  return num > 15;
}

var lessThanFifteen = reject(numbers, FindNumberGreaterThanFifteen);
lessThanFifteen;
