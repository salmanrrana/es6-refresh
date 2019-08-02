var post = { id: 4, title: "New Post" };

var comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "python" },
  { postId: 4, content: "javascript" },
  { postId: 3, content: "RegEx" }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);
