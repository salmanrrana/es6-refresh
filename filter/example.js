var products = [
  { name: "cucumbr", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" }
];

// FOR LOOP Approach
// var filteredProucts = [];
//
//
// for (var i = 0; i < products.length; i++) {
//   if (products[i].type === 'fruit') {
//     filteredProucts.push(products[i]);
//   }
// }
//
// filteredProucts;

// FILTER FUNCTION
products.filter(function(product) {
  return product.type === "fruit";
});
