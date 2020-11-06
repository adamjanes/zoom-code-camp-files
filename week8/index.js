const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todos");
const cors = require('cors');

const app = express();

// enable CORS for our app
app.use(cors());
// enable pre-flight requests
app.options('*', cors())

mongoose.connect("mongodb+srv://adam:foobar123@cluster0.aopn6.mongodb.net/database?retryWrites=true&w=majority")

// body parsing for POST/PATCH
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", router);

app.get("/ping", (req, res) => {
  res.send("pong");
});

// we need to add the HOST argument to 
// get this to work with heroku
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);