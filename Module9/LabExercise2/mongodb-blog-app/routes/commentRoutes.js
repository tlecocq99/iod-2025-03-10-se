const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// GET all comments for a post
router.get("/post/:postId", commentController.getCommentsByPost);

// POST a new comment
router.post("/", commentController.createComment);

module.exports = router;
