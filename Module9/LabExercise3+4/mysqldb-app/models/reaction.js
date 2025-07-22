const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Reaction extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Reaction.init(
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
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    reactionType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      required: true,
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Can be null if reaction is on a post, not a comment
      defaultValue: null,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "reactions",
    timestamps: true, // This automatically adds createdAt and updatedAt
    freezeTableName: true,
  }
);

module.exports = Reaction;
