// Moving away from FOR LOOPS

// The code below is calling 'savePost' three times, but it is doing so using a
// for loop.  This implementation works, but the for loop makes it more
// challenging to understand the purpose of the function.  Rather than using a
// for loop, refactor the code below to instead use the forEach helper.

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" }
  ];

  //FOR LOOP
  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }

  // SOLUTION
  posts.forEach(function(post) {
    savePost(posts[i]);
  });
}
