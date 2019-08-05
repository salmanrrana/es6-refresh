// create a promise
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => console.log("Finally finished!"))
  .then(() => console.log("I was also ran!!!"))
  .catch(() => console.log("I was not resolved ;("));
