const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("./../Schemas/todo");

const Todo = mongoose.model("Todo", todoSchema);
// get todos
router.get("/todos", (req, res) => {
  Todo.find({ __v: 0 }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "todo was inserted successfully",
      });
    }
  });
});
// get single todo
router.get("/todos/:id", (req, res) => {
  Todo.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "todo was inserted successfully",
      });
    }
  });
});
// Create Todo
router.post("/todos", (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "todo was inserted successfully",
      });
    }
  });
});

// Create multiple Todos
router.post("/todos/all", (req, res) => {
  Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "todos were inserted successfully",
      });
    }
  });
});

module.exports = router;
