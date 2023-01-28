const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const { readdirSync } = require("fs");

console.log(readdirSync("./routes"));

readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);
// port
const port = process.env.PORT || 8000;
// routes
app.get("/", (req, res) => {
  res.send("This is Home Page");
});

// listening app
app.listen(port);
