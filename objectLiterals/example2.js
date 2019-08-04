// Classic implementation
// function saveFile(url, data) {
//   $.ajax({
//     method: 'POST,
//     url: url,
//     data: data
//   })
// }
//
// const url = "http:fileupload.com";
// const data = { color: 'red' }
//
// saveFile(url, data);

// ES6
function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: "POST"
  });
}

const url = "http:fileupload.com";
const data = { color: "red" };

saveFile(url, data);
