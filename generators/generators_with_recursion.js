// For Of Loop to iterate over a tree data structure

// creting a tree data structure
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
}

const children = [
  new Comment("good comment", []),
  new Comment("bad comment", []),
  new Comment("meh comment", [])
];

const tree = new Comment("Great Post!", children);

tree;
