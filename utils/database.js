const Sequlizer = require("Sequlizer");

const sequlizer = new Sequlizer(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
);

module.exports = sequlizer;
