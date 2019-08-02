var computers = [
  { name: "apple", ram: 24 },
  { name: "compact", ram: 4 },
  { name: "acer", ram: 32 }
];
//
// // Find all computers with greater than 16gb of ram

// FOR LOOP
// var allComputersCanRunProgram = true;
// var onlysomeComputersCanRunProgram = false;
//
// for (var i = 0; i < computers.length; i++) {
//   // current computer that we are looking at is: computer[i]
//   var computer = computers[i];
//
//   if (computer.ram < 16) {
//     allComputersCanRunProgram = false
//   } else {
//     onlysomeComputersCanRunProgram = true;
//   }
// }
//
// allComputersCanRunProgram;
// onlysomeComputersCanRunProgram;

// EVERY

computers.every(function(computer) {
  return computer.ram > 16;
});

// SOME

computers.some(function(computer) {
  return computer.ram > 16;
});
