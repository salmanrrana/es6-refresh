// classic implementation
// var expense = {
//   type: 'Business',
//   amount: '$45 USD'
// };
//
// var type = expense.type;
// var amount = expense.amount;

// *******************

// ES6 Refactor
// var expense = {
//   type: "Business",
//   amount: "$45 USD"
// };
// const { type } = expense;
// const { amount } = expense;
//
// type;
// expense;

// *******************

//Further refactor
var expense = {
  type: "Business",
  amount: "$45 USD"
};
const { type, amount } = expense;

type;
amount;
