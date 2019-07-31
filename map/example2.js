var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camero", price: "expensive" }
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;
