// Traditional
// function makeAjaxRequest(url, method) {
//   if (!method) {
//     method = "GET";
//   }
// return method;
//   // logic to make the request
// }

// ES6 default fun tion parameters
function makeAjaxRequest(url, method = "GET") {
  return method;
  // logic to make the request
}

makeAjaxRequest("google.com");
makeAjaxRequest("steve.com", "POST");
