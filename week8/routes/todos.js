const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// CREATE
router.post("/", async (req, res) => {
  if (!req.body.task) {
    res.status(400).json({ message: `You must provide a task field to create a new TODO.`})
  }
  const todo = await Todo.create({
    task: req.body.task,
    completed: false
  })
  res.json(todo)
});

// READ all
router.get("/", async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
});

// READ one /todos/123
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    res.json(todo)
  }
  catch {
    res.status(404).json({ message: `Couldn't find TODO with the ID ${req.params.id}`})
  }
});

// UPDATE
router.patch("/:id", async (req, res) => {
  try {    
    // filter req.body to only the fields that we want to update
    const fieldsToUpdate = Object.keys(req.body).reduce((acc, curr) => {
      // only allow us to update task or completed
      if (curr === "task" || curr === "completed") {
        return {
          ...acc,
          [curr]: req.body[curr] // [curr] is the name of the variable curr => "task" or "completed"
        }
      } else {
        return acc
      }
    }, {})

    const todo = await Todo.findByIdAndUpdate(req.params.id, { $set: { ...fieldsToUpdate } }, { new: true})
    res.json(todo)
  }
  catch (error) {
    res.status(404).json({ message: `Couldn't find TODO with the ID ${req.params.id}`})
  }
});

// DESTROY
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id)
    res.json(todo)
  }
  catch {
    res.status(404).json({ message: `Couldn't find TODO with the ID ${req.params.id}`})
  }
});

module.exports = router;
