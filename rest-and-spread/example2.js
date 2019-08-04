// REST is used to gaather variables
// SPREAD operator is meant to spread them out

// const defaultColors = ['red', 'green']
// const userFavoriteColors = ['orange', 'yellow'];
//
// defaultColors.concat(userFavoriteColors);

//*******************
//refactor to use the spread operator
// const defaultColors = ['red', 'green']
// const userFavoriteColors = ['orange', 'yellow'];

// [ ...defaultColors, ...userFavoriteColors];

//*******************
// can easily add other objects to work the spread operator
// const defaultColors = ['red', 'green']
// const userFavoriteColors = ['orange', 'yellow'];
// const fallColors = "brown", orange Fcx
//
// [ ...fallColors, ...defaultColors, ...userFavoriteColors];

//*******************
// Creating a shopping list and making sure that milk is going to be
// on this list that we are going to create

// create this function to see items
//if milk is not on the list, add milk to the list and return
// a new array of items with milk in the shopping list
function validateShoppingList(...items) {
  //indexOf will return -1 if the item does not exist on the list
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
}

// Pass in the items
validateShoppingList("oranges", "bread", "eggs");

//since this list has milk, it will not
// return a new list with milk
validateShoppingList("oranges", "bread", "milk", "eggs");

//*******************

//*******************

//*******************
