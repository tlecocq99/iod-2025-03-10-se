const Post = require("./models/post");

// Find all posts
Post.find({})
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));

// Create a new post
const newPost = new Post({
  title: "First post",
  description: "Hello World",
  publishedAt: new Date(),
  imageUrl: "https://...",
  shareUrl: "https://...",
  userId: "68678a5fb7fe94d02b00735c", // Example user ID
});

newPost
  .save()
  .then((post) => console.log(post))
  .catch((err) => console.error(err));

const getUserPosts = (req, res) => {
  Models.Post.find({ userId: req.params.userId })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
