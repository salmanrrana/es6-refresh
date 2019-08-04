function User(id) {
  this.id = id;
}

// new User(1) // expected outcome -> { "id": 1 }

// generate a random ID when a User is created
function generateId() {
  return Math.random() * 999999;
}

// create a concept of a admin User
// admin user will take argument of a user and promote to an admin
// we are making the default user so we dont have to create a new
function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

// THis will create Admin user with a Default  user
createAdminUser();
// we can also create our own user and
//it will be different than the default user
const steve = new User(generateId());
createAdminUser(steve);
