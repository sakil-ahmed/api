const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const { urlencoded } = require("express");

// port
const PORT = process.env.PORT || 3000;

// mongoose setup
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Connect Successfully and listen port ${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));

readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

// routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
