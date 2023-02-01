const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  categories: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = productSchema;
