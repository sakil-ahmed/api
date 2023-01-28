const express = require("express");
const router = express.Router();
const posts = [];
router.get("/posts", (req, res) => {
  res.send(posts);
});

module.exports = router;
