const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  task: String,
  completed: Boolean,
});

// generate model from schema
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
