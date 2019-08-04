// Classic implementation
// var savedFile = {
//   extension: 'jpeg',
//   name: 'repost',
//   size: 4000
// }
//
// function fileSummary(file) {
//   return `The File ${file.name}.${file.extension} is of size ${file.size}`
//
// }
//
// fileSummary(savedFile);

// ES6
// var savedFile = {
//   extension: 'jpeg',
//   name: 'repost',
//   size: 4000
// }
//
// function fileSummary({ extension, name, size}) {
//   return `The file ${name}.${extension} is of size ${size}`
// }
//
// fileSummary(savedFile);

// Further destructuring
var savedFile = {
  extension: "jpeg",
  name: "repost",
  size: 4000
};

function fileSummary({ extension, name, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFile, { color: "red" });
