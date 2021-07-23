const { hashPassword, comparePassword } = require("../../services/hash");
const dbUsers = require("./../../../db/models/sequelize/users");

exports.register = async (params) => {
  const {  email, password, full_name} = params;
  const userHashPassword = hashPassword(password);
  const user = await dbUsers.create({
    full_name,
    email,
    password: userHashPassword
  });
  return user;
};
exports.login = async (params) => {
  const { email, password } = params;
  const user = await dbUsers.findOne({ where: { email } });
  if (!user) {
    return false;
  }
  if (comparePassword(password, user.password)) {
    return user;
  }
  return false
};
