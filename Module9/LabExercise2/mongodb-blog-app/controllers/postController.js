const Post = require("../models/post");

// Get all posts
const getAllPosts = (req, res) => {
  Post.find({})
    .then((posts) => res.send({ result: 200, data: posts }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Get posts by userId
const getPostsByUser = (req, res) => {
  Post.find({ userId: req.params.userId })
    .then((posts) => res.send({ result: 200, data: posts }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Create a new post
const createPost = (req, res) => {
  const newPost = new Post(req.body);
  newPost
    .save()
    .then((post) => res.send({ result: 200, data: post }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

module.exports = {
  getAllPosts,
  getPostsByUser,
  createPost,
};
