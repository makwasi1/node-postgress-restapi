const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "postgres",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DB_SSL == "true",
    },
  }
);

const Students = sequelize.define("students", {
  name:{ type : Sequelize.STRING,allowNull: false},
  email: { type : Sequelize.STRING,allowNull: false},
  age: Sequelize.INTEGER,
  dob: Sequelize.DATE,
})

module.exports = {
  sequelize: sequelize,
  Students: Students
}
