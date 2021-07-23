const crypto = require("crypto");
const bcrypt = require("bcrypt");

exports.randomHash = crypto.randomBytes(10).toString("hex");

exports.hashPassword = (password) => bcrypt.hashSync(password, 8);

exports.comparePassword = (password, hash) =>
  bcrypt.compareSync(password, hash);
