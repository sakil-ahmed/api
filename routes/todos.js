const express = require("express");
const router = express.Router();
const todos = [];
router.get("/todos", (req, res) => {
  res.send(todos);
});

module.exports = router;
