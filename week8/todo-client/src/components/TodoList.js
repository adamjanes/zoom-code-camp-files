import React from "react";
import { List } from "@material-ui/core";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <List dense={true}>
    {todos.map((todo) => (
      <TodoListItem
        key={todo._id}
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </List>
);

export default TodoList;
