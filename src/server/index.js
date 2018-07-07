const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const dist = path.join(__dirname, "../../dist");

app.use(express.static(dist));

app.get("*", (req, res) => {
  res.sendFile(path.join(dist, "index.html"));
});

app.listen(port, "localhost", (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on port ${port}`);
});
