const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("./../Schemas/user");

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// get all users
router.get("/users", (req, res) => {
  User.find({ __v: 0 })
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "Get all users successfully",
          result: data,
        });
      }
    });
});

// get single user
router.get("/users/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Get a single user successfully",
        });
      }
    });
});

// Crteate a single user
router.post("/users", (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "User was inserted successfully",
      });
    }
  });
});

// Create multiple Users
router.post("/users/all", (req, res) => {
  User.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "Users were inserted successfully",
      });
    }
  });
});

module.exports = router;
