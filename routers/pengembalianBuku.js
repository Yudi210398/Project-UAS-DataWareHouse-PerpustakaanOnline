const express = require("express");
const routerbalik = express.Router();
const hapusData = require("../inputDataLogic/pengembalindata.js");
routerbalik.get("/data-pengembalianBuku", (req, res, next) => {
  res.render("pengembalianBuku");
});

routerbalik.post("/datas", (req, res, next) => {
  hapusData(req.body["email-peminjam"], req.body["telp-peminjam"]);
  console.log(req.body["telp-peminjam"]);
  res.redirect("/");
});

module.exports = routerbalik;
