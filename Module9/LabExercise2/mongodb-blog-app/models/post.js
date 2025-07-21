const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the "posts" collection
const postSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    publishedAt: { type: Date, default: null }, // Can be null or a date
    imageUrl: { type: String, trim: true },
    shareUrl: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, // Foreign key reference to "user"
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);


// Export the model
module.exports = mongoose.model("post", postSchema);
