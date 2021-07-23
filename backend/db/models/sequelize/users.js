const Sequelize = require("sequelize");
const db = require("./../../connections/sequelize");

const users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hash: {
      type: Sequelize.STRING(64),
    },
    full_name: {
      type: Sequelize.STRING(128),
    },
    email: {
      type: Sequelize.STRING(128),
    },
    password: {
      type: Sequelize.STRING(128),
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    freezeTableName: true,
    tableName: "users",
  }
);
module.exports = users;
// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define('users', {
//         id : {
//             type : Sequelize.INTEGER,
//             primaryKey : true,
//             autoIncrement : true
//         },
//         hash : {
//             type : Sequelize.STRING(64)
//         },
//         full_name : {
//             type : Sequelize.STRING(128)
//         },
//         email : {
//             type : Sequelize.STRING(128)
//         },
//         created_at : {
//             type : Sequelize.DATE,
//             defaultValue : Sequelize.NOW
//         }
//     }, {
//         freezeTableName : true,
//         tableName : 'users'
//     });
// };
