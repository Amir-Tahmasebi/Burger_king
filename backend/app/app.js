const express = require("express");
const app = express();

require("./middleware/index")(app);
require("./router")(app);

const server = app.listen(process.env.APP_PORT, () => {
  console.log("app is runnig ...");
});

module.exports = server;
