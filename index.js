const express = require("express"); // commonjs import, synchronous

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

module.exports = app; // commonjs export
