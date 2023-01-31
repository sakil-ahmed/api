const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"] },
});

module.exports = todoSchema;
