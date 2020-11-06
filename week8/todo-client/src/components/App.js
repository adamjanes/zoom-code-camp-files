import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

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
    setTodos([
      { id: uuidv4(), task: "Do laundry", completed: false },
      { id: uuidv4(), task: "Get car fixed", completed: true },
      { id: uuidv4(), task: "Email Mandy", completed: false },
      { id: uuidv4(), task: "Complete TPS report", completed: false },
    ]);
  }, []);

  const addTodo = (task) => {
    const newTodo = {
      id: uuidv4(),
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, values) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...values,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
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
