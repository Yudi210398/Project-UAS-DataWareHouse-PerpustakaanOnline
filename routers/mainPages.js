let express = require("express");
let routerMain = express.Router();
let loadData = require("../inputDataLogic/loadNsaveData.js");
// const views = require("../views/main.html");
const path = require("path");
routerMain.get("/", (req, res, next) => {
  let dataBukuPinjam = loadData.loadNotes();
  //   res.sendFile(path.join(__dirname, "../", "views", "main.html"));
  res.render("main", { dataBook: dataBukuPinjam });
});
module.exports = routerMain;
