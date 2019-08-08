// prototypal inheritance and using classes to set it up

// traditional
// function Car(options) {
//   this.title = options.title;
// }
//
// Car.prototype.drive = function() {
//   return 'vroom'
// }
//
// const car = new Car({ title: 'Focus'})
// car;

// ************************

// Additional Toyota object and assigning same prototypal inheritance as
// the car

// function Car(options) {
//   this.title = options.title;
// }
//
// Car.prototype.drive = function() {
//   return "vroom";
// };
//
// function Toyota(options) {
//   // connect the Toyota to he Car and inherit the props of car
//   Car.call(this, options);
//   this.color = options.color;
// }
//
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// Toyota.prototype.honk = function() {
//   return "beep";
// }
//
// const toyota = new Toyota({ color: "red", title: "Daily Driver" });
// toyota;
// toyota.honk();
// toyotoa.drive();

// ************************

// Refactor to ES6 and using ES6 classes
class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "vroom";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}

const toyota = new Toyota({ color: "red", title: "Daily Driver" });

toyota;
toyota.drive();
toyota.honk();

// Im going to test this out
