const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("./../Schemas/todo");

// Create a todo model
const Todo = mongoose.model("Todo", todoSchema);

// Get all todos
router.get("/todos", (req, res) => {
  Todo.find({ __v: 0 })
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "get todos successfully",
          result: data,
        });
      }
    });
});

// Get a single todo
router.get("/todos/:id", (req, res) => {
  Todo.findOne({ _id: req.params.id })
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "get a single todo successfully",
          result: data,
        });
      }
    });
});

// Create a single Todo
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
