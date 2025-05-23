const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");

require("dotenv").config();
require("./src/utilities/Database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3001;

app.use("/api/hotbites", require("./routes/api/HotBites"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express App running on port ${port}`);
});
