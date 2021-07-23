const express = require("express");
const bookingRouter = express.Router();
const bookingHandler = require("./handler");

bookingRouter.post("/", bookingHandler.booking);

module.exports = bookingRouter;
