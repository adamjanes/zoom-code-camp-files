const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todos");
const cors = require('cors');

const app = express();
app.use("/todos", cors());
app.options('*', cors())

mongoose.connect("mongodb+srv://adam:foobar123@cluster0.aopn6.mongodb.net/database?retryWrites=true&w=majority")

// body parsing for POST/PATCH
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", router);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(5000);
