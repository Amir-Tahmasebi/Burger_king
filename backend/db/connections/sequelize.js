const Sequelize = require("sequelize");
// const path = require("path");
// const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
      timeStamps: false,
      freezeTableName: true,
    },
    logging: false,
    timezone: "+04:30",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.log("Unable to connect to the database:" + error);
  });
// db.User = sequelize.import(path.join(__dirname, '../models/sequelize/users.js'))

sequelize.sync();
// module.exports = db;
module.exports = sequelize;
