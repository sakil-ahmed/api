const express = require("express");
const router = express.Router();
const posts = [];
const postSchema = require("./../Schemas/post");

router.get("/posts", (req, res) => {
  res.send(posts);
});

module.exports = router;
