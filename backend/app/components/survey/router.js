const express = require("express");
const surveyRouter = express.Router();
const surveyHandler = require("./handler");

surveyRouter.post("/", surveyHandler.survey);

module.exports = surveyRouter;
