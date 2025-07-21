const Comment = require("../models/comment");

const getCommentsByPost = (req, res) => {
  Comment.find({ postId: req.params.postId })
    .then((comments) => res.send({ result: 200, data: comments }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

const createComment = (req, res) => {
  const newComment = new Comment(req.body);
  newComment
    .save()
    .then((comment) => res.send({ result: 200, data: comment }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

module.exports = {
  getCommentsByPost,
  createComment,
};
