// DESTRUCTURING ARRAYS
// const companies = [
//   "google",
//   "facebook",
//   "Uber"
// ]
//
// const [name] = companies;
//
// name; // Expect ->  google

// *****************************

// FURTHER EDXAMPLE
// const companies = [
//   "google",
//   "facebook",
//   "Uber"
// ]
//
// const [name, name2, name3] = companies;
//
// name; // Expect ->  google
// name2; // Expect ->  facebook
// name3; // Expect ->  uber

// *****************************

//Spread operator with destructuring arrays
const companies = ["google", "facebook", "Uber"];

const [name, ...rest] = companies;
name; // expect ->  google
rest; // Expect -> ["facebook", "Uber"]
