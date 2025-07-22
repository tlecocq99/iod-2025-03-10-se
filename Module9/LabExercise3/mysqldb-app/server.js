const express = require("express");
require("dotenv").config();
const app = express();
const dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let reactionRoutes = require("./routes/reactionRoutes");
let commentRoutes = require("./routes/commentRoutes");
let postRoutes = require("./routes/postRoutes");

// parse requests of content-type - application/json
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/reactions", reactionRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
