// Can be used for a login form for a username or password
// before the form is submitted, we are going to want to
// validate what the user has typed

function Field(value) {
  this.value = value;
}

//adding a method to field
Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

// Want to make sure that every field is now validated
// if we add more fields (like birthdate) it may be difficult
// to write code for validate everytime liek below:
// username.validate() && password.validate();

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

//Now that we know if every form will validate we can do the following:
if (formIsValid) {
  // allow user to submit
} else {
  // show user an error message
}
