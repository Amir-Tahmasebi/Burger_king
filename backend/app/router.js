const authRouter = require("./components/auth/router");
const bookingRouter = require("./components/booking/router");
const initRouter = require("./components/init/router");
const surveyRouter = require('./components/survey/router');

module.exports = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/init", initRouter);
  app.use("/api/v1/booking", bookingRouter);
  app.use("/api/v1/survey", surveyRouter);
};
