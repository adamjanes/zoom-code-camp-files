const express = require("express");
const router = express.Router();

// CREATE
router.post("/", (req, res) => {
  res.send("Creating new todo...");
});

// READ all
router.get("/", (req, res) => {
  res.send("Retrieving all todos...");
});

// READ one /todos/123
router.get("/:id", (req, res) => {
  res.send("Retrieving one todo...");
});

// UPDATE
router.patch("/:id", (req, res) => {
  res.send("Updating todo...");
});

// DESTROY
router.delete("/:id", (req, res) => {
  res.send("Deleting todo...");
});

module.exports = router;
