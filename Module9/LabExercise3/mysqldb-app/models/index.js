"use strict";
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Reaction = require("./reaction");

async function init() {
  await User.sync(); // sync the model
  await Post.sync(); // sync the post model
  await Comment.sync(); // sync the comment model
  await Reaction.sync(); // sync the reaction model
}

init();
// Sequelize will auto-generate foreign key column names based on the table names
Post.belongsTo(User);
User.hasMany(Post);
Comment.belongsTo(User);
User.hasMany(Comment);
Reaction.belongsTo(User);
User.hasMany(Reaction);
module.exports = {
  User, // export the model
  Post, // export the post model
  Comment, // export the comment model
  Reaction, // export the reaction model
};
