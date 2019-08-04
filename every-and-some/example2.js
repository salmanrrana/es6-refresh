var names = ["Alexandria", "Matthew", "Joe"];

// Does EVERY name in this list have a character length
// more than 4 - expect FALSE
names.every(function(name) {
  return name.length > 4;
});

// Does SOME of the names in this list have a character length
// more than 4 - expect FALSE
names.some(function(name) {
  return name.length > 4;
});
