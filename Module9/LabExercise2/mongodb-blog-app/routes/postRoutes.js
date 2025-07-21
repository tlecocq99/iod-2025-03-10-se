const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// GET all posts
router.get("/", postController.getAllPosts);

// GET posts by userId
router.get("/user/:userId", postController.getPostsByUser);

// POST route to create a new post
router.post("/", postController.createPost);

module.exports = router;
