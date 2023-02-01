const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const productSchema = require("./../Schemas/product");
const multer = require("multer");
const { readFileSync } = require("fs");
const path = require("path");
const UPLOADS_FOLDER = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1MB
  },
});

// Create a product model
const Product = mongoose.model("Product", productSchema);

// Get All Products
router.get("/products", (req, res) => {
  Product.find({ __v: 0 })
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "Get products successfully",
          result: data,
        });
      }
    });
});

// get single Product
router.get("/products/:id", (req, res) => {
  Product.findOne({ _id: req.params.id })
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "get a single Product successfully",
          result: data,
        });
      }
    });
});

// Create a single Product
router.post("/products", upload.single("image"), (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    categories: req.body.categories,
    image: req.file.filename,
  });
  newProduct.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "Product was inserted successfully",
      });
    }
  });
});

// Create multiple Products
router.post("/products/all", (req, res) => {
  Product.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "Products were inserted successfully",
      });
    }
  });
});

module.exports = router;
