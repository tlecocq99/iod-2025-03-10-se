const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the "likes" collection
const likeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true }, // Foreign key reference to "user"
    postId: { type: Schema.Types.ObjectId, ref: "post", default: null }, // Foreign key reference to "post"
    commentId: { type: Schema.Types.ObjectId, ref: "comment", default: null }, // Foreign key reference to "comment"
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the model
module.exports = mongoose.model("like", likeSchema);
