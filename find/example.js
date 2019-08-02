// FOR LOOP IMPLEMENTATION
// var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

// var user;
//
// for (var i = 0; i < users.length; i++) {
//   if (users[i].name === "Alex") {
//     user = users[i];
//     // This will stop the loop early if we find the user we are looking for
//     break;
//   }
// }
//
// user;

var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

users.filter(function(user) {
  return user.name === "Alex";
});
