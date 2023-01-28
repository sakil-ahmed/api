const express = require("express");
const router = express.Router();
const users = [];
router.get("/users", (req, res) => {
  res.send(users);
});

module.exports = router;
