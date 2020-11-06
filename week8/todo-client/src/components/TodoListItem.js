import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Input,
  makeStyles,
} from "@material-ui/core";
import { Edit, Delete, CheckCircle, Cancel } from "@material-ui/icons";

const useStyles = makeStyles({
  input: {
    marginRight: "92px",
  },
});

const TodoListItem = ({ todo, updateTodo, deleteTodo }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.task);

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          onClick={() => {
            updateTodo(todo._id, {
              completed: !todo.completed
            })
          }}
        />
      </ListItemIcon>
      {editing ? (
        <>
          <Input
            className={classes.input}
            placeholder="Edit TODO text"
            value={value}
            fullWidth
            onChange={(e) => setValue(e.target.value)}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="cancel"
              onClick={() => {
                setValue(todo.task);
                setEditing(false);
              }}
            >
              <Cancel />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="confirm"
              onClick={() => {
                updateTodo(todo._id, {
                  task: value,
                });
                setEditing(false);
              }}
            >
              <CheckCircle />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      ) : (
        <>
          <ListItemText
            style={{ textDecoration: todo.completed ? "line-through" : null }}
            primary={todo.task}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => setEditing(true)}
            >
              <Edit />
            </IconButton>
            <IconButton 
              edge="end" 
              aria-label="delete"
              onClick={() => {
                deleteTodo(todo._id)
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TodoListItem;
