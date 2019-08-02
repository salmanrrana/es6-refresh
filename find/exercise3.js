// This is a tough one!  The most common find operation is to an object that has
// a given property.  Rather than writing out a full function every time,
// it would be great if we has a shorthand syntax to find an object like this:

var ladders = [{ id: 1, height: 20 }, { id: 1, height: 25 }];

function findWhere(array, criteria) {
  return array.find(function(item) {
    return item[Object.keys(criteria)] == Object.values(criteria);
  });
}

findWhere(ladders, { height: 20 });
