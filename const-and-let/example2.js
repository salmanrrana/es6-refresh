// What are these solving?

// traditional
// function count(targetString) {
//   var characters = ['a', 'e', 'i', 'o', 'u'];
//   var number = 0;
//
//   for (var i = 0; i < targetString.length; i++) {
//     if ( characters.include(targetString[i])) {
//       number++
//     }
//   }
//
//   return number;
// }
//
// count('juadfgoafgrssdfveeeoiafgu');

// with CONST and LET
function count(targetString) {
  const characters = ["a", "e", "i", "o", "u"];
  let number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if (characters.include(targetString[i])) {
      number++;
    }
  }

  return number;
}

count("juadfgoafgrssdfveeeoiafgu");
