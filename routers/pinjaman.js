const express = require("express");
const routerAdmin = express.Router();
const path = require("path");
const helperPath = require("../helper/helper.js");
const tambahNotes = require("../inputDataLogic/tambahData.js");

routerAdmin.get("/data-pinjaman", (req, res, next) => {
  //   res.sendFile(path.join(__dirname, "../", "views", "pinjamanViews.html"));
  res.render("pinjamanViews");
});

routerAdmin.post("/data", (req, res, next) => {
  tambahNotes(
    req.body["nama-peminjam"],
    req.body["email-peminjam"],
    req.body["nama-buku"],
    req.body["telp-peminjam"]
  );
  res.redirect("/");
});

module.exports = routerAdmin;
