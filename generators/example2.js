// // Example Following the story of walking onthe sidewalk with money in pocket.
// // then going into a store. then leaving with groceries in stead of money
//
//
// function* shopping() {
//   // stuff on the sidewalk
//
//   // walking down the sidewalk
//
//   // go into the store with cash
//   // we make our transition  into the store with some cash
//   const stuffFromStore = yield 'cash';
//
//   // walking back home
//   return stuffFromStore
// }
//
// // stuff inthe store
// const gen = shopping();
// gen.next();  // leaving our house
// // THis is the point that we would walk into
// // the store after the line above
// // Then we purchase our stuff
//
// //since we purchased our stuff, we pass in groceries
// gen.next('groceries')  // leaving the store with groceries

// Example Following the story of walking onthe sidewalk with money in pocket.
// then going into a store. then leaving with groceries in stead of money

// ***********************************

// Adding another step/stop on our way home
function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  // we make our transition  into the store with some cash
  const stuffFromStore = yield "cash";
  // now we are walking to laundrymat with some laundry
  const cleanClothes = yeild 'laundry';

  // walking back home
  return [stuffFromStore, cleanClothes];
}

// stuff inthe store
const gen = shopping();
gen.next(); // leaving our house
// THis is the point that we would walk into
// the store after the line above
// Then we purchase our stuff

//since we purchased our stuff, we pass in groceries
gen.next("groceries"); // leaving the store with groceries



gen.next('clean clothes');
