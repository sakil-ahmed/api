const express = require("express");
const router = express.Router();

const cart = [];
router.get("/cart", (req, res) => {
  res.send(cart);
});

module.exports = router;
