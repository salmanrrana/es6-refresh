//creating a math library for this example
// say that the feedback we receive is that calculateProduct is a bad name
// we should name mulitplyProduct...how do we resolve?

// const MathLibrary = {
//   calculateProduct(a,b) {
//     return a * b;
//   }
// };

const MathLibrary = {
  calculateProduct(...rest) {
    console.log("Please use the Multiply method instead");
    return this.multiply(...rest);
  },

  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.multiply(8, 2);
MathLibrary.calculateProduct(8, 2);
