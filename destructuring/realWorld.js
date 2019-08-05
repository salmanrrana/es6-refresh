// // function that takes a username and password and saves it to a database
//
// function signup(username, password, email, dateOfBirth, city) {
//   //create a new user
// }
//
// // other code
// // other code
// // other code
// // other code
// // other code
// // other code
// // other code
//
// // This function is located somewhere different than our code base
// signup('name', 'mypassword', 'myemail@example.com', '1/1/1998', 'Austin');
//
// // other code
// // other code
// // other code
// // other code
// // other code
// // other code
// // other
//
//
// // It can be difficult to remember what the order was to pass it properly into our function
// signup(username, password, email, dateOfBirth, city)

// ************

// we can attempt to create a user and pass in only that user to the function
const user = {
  username: "myname",
  password: "mypassword",
  email: "myemail@email.com",
  dateOfBirth: "1/1/1998",
  city: "Austin"
};

// and now we can set up our signup function to destructure the info from the user
function signup({ username, password, email, dateOfBirth, city }) {
  //create a new user
}
signup(user);
