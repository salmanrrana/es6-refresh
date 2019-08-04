// The function below uses the 'function' keyword.  There's nothing wrong with
// using the 'function' keyword here, but it might look a bit nicer if we
// refactor it to use the fat arrow syntax instead.

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
