const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const products = [
  {
    _id: 1,
    image: "",
    title: "Make Me Blush",
    price: "48.78",
    categories: "SHIPPED IN A BOX",
    description: "",
  },
  {
    _id: 2,
    image: "",
    title: "Birthday Brights Bouquet",
    price: "45-70",
    categories: "FARM-TO-DOOR",
    description: "",
  },
  {
    _id: 3,
    image: "",
    title: "Cookie Bundle",
    price: "55-95",
    categories: "FLORIST-TO-DOOR",
    description: "",
  },
  {
    _id: 4,
    image: "",
    title: "Truffle Bundle",
    price: "48-78",
    categories: "SHIPPED IN A BOX",
    description: "",
  },
  {
    _id: 5,
    image: "",
    title: "Flutter By Bouquet",
    price: "45-70",
    categories: "FARM-TO-DOOR",
    description: "",
  },
  {
    _id: 6,
    image: "",
    title: "Pink Roses",
    price: "55-95",
    categories: "FLORIST-TO-DOOR",
    description: "",
  },
];

router.get("/products", (req, res) => {
  res.send(products);
});
// post

module.exports = router;
