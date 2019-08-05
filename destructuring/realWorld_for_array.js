// API that responds with data that with an x and y coordinate
// const points = [
//   [4,5],
//   [10,1],
//   [0,40]
// ];
//
// // The visualization function would expect this:
// [
//   { x: 4, y: 5},
//   { x: 10, y: 1},
//   { x: 0, y: 40}
// ]

// ES6
const points = [[4, 5], [10, 1], [0, 40]];

// this will destructure the first item in the array at [0]
// to now be x and the second item [1] to be y
points.map(([x, y]) => {
  return { x, y };
});
