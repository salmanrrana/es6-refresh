// complaints on fetcvh

url = "https://jsonplaceholder.typicode.com/posts123456/";

fetch(url)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("BAD", error);
  });

// We would not see the catch case when we use fetch as above

// Fetch will hit catch when it fails to see the proper address as below
// url = "https://jsonplaceholder.typicode9824i5724385.com/posts/";
