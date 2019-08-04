// // Classic Object
// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function() {
//       // sum up the value of all of our inventory
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function(title) {
//       // take the title and find the price for it
//       // This will return the title:
//       // this.inventory.find(book => this.book.title === title)
//       // THis will return the prive of that title: .price
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }
//
// const inventory = [
//   { title: "Harry Potter", price: 10 },
//   { title: "Eloquent Javascript", price: 15 }
// ];
//
// const bookshop = createBookShop(inventory);
// bookshop.inventoryValue();
// bookshop.priceForTitle("Harry Potter");
// bookshop.priceForTitle("Eloquent Javascript");

// ************ || ************ \\

// Object Literal ES6
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent Javascript", price: 15 }
];

const bookshop = createBookShop(inventory);
bookshop.inventoryValue();
bookshop.priceForTitle("Harry Potter");
bookshop.priceForTitle("Eloquent Javascript");
