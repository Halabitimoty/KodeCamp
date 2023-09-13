const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config({ path: "config.env" });

app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views/ejs"));

app.get("/", (req, res) => {
  res.send("CRUD Application");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port${PORT}`);
});
