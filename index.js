const express = require("express");
const app = express();
const port = 3000;
require("core-js/stable");
require("regenerator-runtime");
const mainPages = require("./routers/mainPages.js");
const pinjaman = require("./routers/pinjaman.js");
const pengembalian = require("./routers/pengembalianBuku.js");
const error = require("./routers/errorPages.js");
const bodyParser = require("body-parser");
(function () {
  app.set("view engine", "pug");
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(mainPages);
  app.use("/admin", pinjaman);
  app.use("/admin", pengembalian);
  app.use(error);
  app.listen(port);
})();
