const Sequlizers = require("sequelize");
const db = require("../utils/database");

const User = db.define("User", {
  id: {
    type: Sequlizers.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: Sequlizers.STRING,
  email: Sequlizers.STRING,
});

module.exports = User;
