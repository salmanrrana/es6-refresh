// const companies = [
//   {name: "Google", location: "Mountain View"},
//   {name: "Facebook", location: "Menlo Park"},
//   {name: "Uber", location: "San Francisco"},
// ]
//
// var location = companies[0].location;
// location; // expect -> Mountain View

// **************************

// const companies = [
//   { name: "Google", location: "Mountain View" },
//   { name: "Facebook", location: "Menlo Park" },
//   { name: "Uber", location: "San Francisco" }
// ];
//
// // can destructor the array and then destructor our properties
// // if no {} then we would get back the first item in the array
// //which would be: {name: "Google", location: "Mountain View"}
// const [{ location }] = companies;

// **************************
// EXAMPLE 2

const Google = {
  locations: ["Mountain View", "New York", "London"]
};

// const { locations }  = Google;
// locations; // expect -> ["Mountain View","New York","London"]

const {
  locations: [location]
} = Google;
location; // expect -> "Mountain View"
