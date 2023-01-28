const express = require("express");
const router = express.Router();
const photos = [];
router.get("/photos", (req, res) => {
  res.send(photos);
});

module.exports = router;
