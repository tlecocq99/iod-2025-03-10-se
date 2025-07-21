const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the "comments" collection
const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true }, // Foreign key reference to "user"
    postId: { type: Schema.Types.ObjectId, ref: "post", required: true }, // Foreign key reference to "post"
    content: { type: String, trim: true, required: true }, // Comment content
    parentId: { type: Schema.Types.ObjectId, ref: "comment", default: null }, // Reference to parent comment (for nested comments)
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the model
module.exports = mongoose.model("comment", commentSchema);
