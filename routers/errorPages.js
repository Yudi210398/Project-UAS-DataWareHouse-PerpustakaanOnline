let express = require("express");
let routerError = express.Router();
const path = require("path");
// const views = require("../views/main.html");

routerError.use((req, res, next) => {
  res.status(404);
  //   res.sendFile(path.join(__dirname, "../", "views", "error.html"));
  res.render("error");
});

module.exports = routerError;
