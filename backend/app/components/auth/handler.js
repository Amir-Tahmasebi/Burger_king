const authService = require("./authService");
// const { randomHash } = require("./../../services/hash");
const { sign } = require("../../services/token");

exports.register = async (req, res) => {
  const newUserData = { ...req.body };
  const newUser = await authService.register(newUserData);
  if (newUser) {
    res.send({
      status: 1,
      message: "ثبت نام شما با موفقیت انجام شد",
    });
  } else {
    res.send({
      status: 0,
      // success
      message: "خطایی در فرآیند ثبت نام رخ داده است",
    });
  }
};

exports.login = async (req, res) => {
  const userCredentials = req.body;
  const loginResult = await authService.login(userCredentials);
  if (loginResult === false) {
    res.send({
      status: 0,
      message: "کاربری با این مشخصات در سیستم یافت نشد",
    });
  }
  return res.send({
    status: 1,
    token: sign({ uid: loginResult.hash }),
    message : 'ورود شما با موفقیت انجام شد'
  });
};
