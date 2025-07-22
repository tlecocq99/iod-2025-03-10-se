const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});
// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});
module.exports = router;
