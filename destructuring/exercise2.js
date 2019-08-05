// The 'classes' variable holds an array of arrays, where each array represents
// a single class that a student is enrolled in.  Convert this array of arrays
// into an array of objects, where each object has the keys 'subject', 'time',
// and 'teacher' and assign the result to 'classesAsObject.  Use array
// destructuring and the map helper.

const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return {
    subject,
    time,
    teacher
  };
});

classesAsObject;
