import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import axios from "axios";

import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const useStyles = makeStyles({
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    flex: 1,
    padding: "20px",
    margin: "10px 0px",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

const App = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((e) => {
        console.log("Error: Could not load TODOs.", e);
      });
  }, []);

  const addTodo = (task) => {
    axios
      .post("http://localhost:5000/todos", { task })
      .then((res) => {
        setTodos([...todos, res.data]);
      })
      .catch((e) => {
        console.log("Error: Could not add TODO.", e);
      });
  };

  const updateTodo = (id, values) => {
    axios
      .patch(`http://localhost:5000/todos/${id}`, values)
      .then((res) => {
        const newTodos = todos.map((todo) => {
          if (todo._id === id) {
            return res.data;
          } else {
            return todo;
          }
        });
        setTodos(newTodos);
      })
      .catch((e) => {
        console.log("Error: Could not update TODO.", e);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then((res) => {
        const newTodos = todos.filter((todo) => todo._id !== id);
        setTodos(newTodos);
      })
      .catch((e) => {
        console.log("Error: Could not delete TODO.", e);
      });
  };

  return (
    <div className={classes.app}>
      <Header />
      <Container className={classes.container} maxWidth="sm">
        <Paper className={classes.paper}>
          <AddTodo addTodo={addTodo} />
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default App;
