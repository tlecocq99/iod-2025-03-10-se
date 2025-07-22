const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT(150),
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      required: true,
    },
    imageURL: {
      type: DataTypes.STRING(255),
      allowNull: false,
      required: true,
    },
    shareURL: {
      type: DataTypes.STRING(255),
      allowNull: false,
      required: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // Changed from "comments" to "posts"
    timestamps: true, // This automatically adds createdAt and updatedAt
    freezeTableName: true,
  }
);
module.exports = Post;
