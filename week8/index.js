const express = require("express");
const router = require("./routes/todos");

const app = express();

// body parsing for POST/PATCH
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", router);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(5000);
