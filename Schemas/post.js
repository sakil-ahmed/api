const mongoose = require("mongoose");

// Create a schema for the data
const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = postSchema;
