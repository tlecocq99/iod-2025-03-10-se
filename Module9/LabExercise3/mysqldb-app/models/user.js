const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model {}
// Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      required: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
      unique: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = User;
