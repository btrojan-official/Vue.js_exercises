const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");
const path = require("path");

// app.use(express.static("static/cwiczenia"));
app.use(express.static("static"));

app.get("/pagesList", function (req, res) {
  dir_path = path.join(__dirname,"/static/cwiczenia");
  const filenames = fs.readdirSync(dir_path);
  console.log(filenames);
  res.send({filenames});
});

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
