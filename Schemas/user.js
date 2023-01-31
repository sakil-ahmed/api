const mongoose = require("mongoose");

// Create a schema for the data
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = userSchema;
