const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

// GET all likes for a post
router.get("/post/:postId", likeController.getLikesByPost);

// POST a new like
router.post("/", likeController.createLike);

module.exports = router;
