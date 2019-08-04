// Traditional
// function getMessage() {
//   const year = new Date().getFullYear();
//
//   return "The year is " + year;
// }

// Template Strings or Template Literals
// function getMessage() {
//   const year = new Date().getFullYear();
//
//   return `The year is ${year}`;
// }

// Cleaned up code
function getMessage() {
  return `The year is ${new Date().getFullYear()}`;
}
