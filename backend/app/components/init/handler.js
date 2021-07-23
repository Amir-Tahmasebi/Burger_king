const { randomHash } = require("./../../services/hash");
const { verify, findToken } = require("../../services/token");

exports.init = async (req, res) => {
  const token = findToken(req);
  if (!token) {
    return res.send({
      status: 0,
      message: "token is absent!",
    });
  }
  try {
    const payload = verify(token);
  } catch (error) {
    return res.send({
      status: 0,
      message: "token is invalid!",
    });
  }
  return res.send({
    status: 1,
    message: 'ورود شما با موفقیت انجام شد'
    // success : true
  });
};
