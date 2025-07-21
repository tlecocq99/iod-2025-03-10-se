const Like = require("../models/like");

const getLikesByPost = (req, res) => {
  Like.find({ postId: req.params.postId })
    .then((likes) => res.send({ result: 200, data: likes }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

const createLike = (req, res) => {
  const newLike = new Like(req.body);
  newLike
    .save()
    .then((like) => res.send({ result: 200, data: like }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

module.exports = {
  getLikesByPost,
  createLike,
};
