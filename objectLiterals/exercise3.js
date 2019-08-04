// Refactor to use enchanced literal notation

// const canvasDimensions = function(width, initialHeight) {
//   const height = initialHeight * 9 /16;
//   return {
//     width: width,
//     height: height
//   };
// }

const canvasDimensions = function(width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  return {
    width,
    height
  };
};
