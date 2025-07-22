const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});
// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});
module.exports = router;
