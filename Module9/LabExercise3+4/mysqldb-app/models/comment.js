const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      required: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Can be null for top-level comments
      defaultValue: null,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Comment;
