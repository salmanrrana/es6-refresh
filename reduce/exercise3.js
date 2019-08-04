// Example:
var numbers = [1, 1, 2, 1, 3, 4, 76, 2, 3, 4, 4];
// should return:
// [1,2,3,4];

function unique(array) {
  return array.reduce(function(previous, item) {
    var founditem = previous.find(function(prev) {
      return prev === item;
    });
    if (founditem != item) {
      previous.push(item);
    }
    return previous;
  }, []);
}

unique(numbers);
