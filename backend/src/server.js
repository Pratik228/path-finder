const express = require("express");
const cors = require("cors");
const findPath = require("./controllers/findPath");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/find-path", (req, res) => {
  const { start, end } = req.body;
  const grid = Array(20)
    .fill()
    .map(() => Array(20).fill(0));
  const path = findPath(grid, start, end);

  if (path) {
    res.json({ path });
  } else {
    res.status(404).json({ message: "No Path found" });
  }
});

app.listen(7777, () => {
  console.log("listening on 7777");
});
