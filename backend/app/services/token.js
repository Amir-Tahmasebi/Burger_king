const jwt = require("jsonwebtoken");

exports.findToken = (req) => {
  const auth = req.headers["authorization"];
  // const auth = req.headers.authorization
  if (!auth || auth === undefined) {
    return false;
  }
  // const [bearer, token] = auth.split(" ");
  const token = auth.split(" ")[2];
  if (!token) {
    return false;
  }
  return token
};

exports.sign = (params) => {
  return jwt.sign(params, process.env.JWT_SCRET);
};

exports.verify = (token) => {
  return jwt.verify(token, process.env.JWT_SCRET);
};
