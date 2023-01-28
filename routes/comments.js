const express = require("express");
const router = express.Router();
const comments = [];
router.get("/comments", (req, res) => {
  res.send(comments);
});

module.exports = router;
