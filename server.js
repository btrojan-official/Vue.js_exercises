const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");

app.get("/pagesList", function (req, res) {
  const filenames = fs.readdirSync(__dirname + "/static/cwiczenia");
  console.log(filenames);
  res.send(filenames);
});

app.use(express.static("static/cwiczenia/lekcja1"));
app.use(express.static("static"));
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
