const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");
const path = require("path");

// app.use(express.static("static/cwiczenia"));
app.use(express.static("static"));

app.get("/pagesList", function (req, res) {
  dir_path = path.join(__dirname, "/static/cwiczenia");
  let dirnames = fs.readdirSync(dir_path);

  files = {};

  for (lekcja of dirnames) {
    let lekcja_path = path.join(dir_path, lekcja);
    let lekcja_files = fs.readdirSync(lekcja_path);

    files[lekcja] = lekcja_files;
  }
  // filenames = filenames.map((str) => "cwiczenia/" + str);

  console.log(files);

  res.send(files);
});

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
