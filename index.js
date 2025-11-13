// const express = require("express"); // commonjs import, synchronous

import express from "express"; // ES module import import, asynchronous

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

// module.exports = app; // commonjs export
export default app; // ES modile export
