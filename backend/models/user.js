const { DataTypes } = require("sequelize");
const sequelize = require("./index"); // Import the initialized Sequelize instance

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
});

module.exports = User;
