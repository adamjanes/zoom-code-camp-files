import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, InputBase, Button } from "@material-ui/core";

const useStyles = makeStyles({
  searchBox: {
    border: "1px solid #cccccc",
    height: "55px",
    flex: 0,
  },
  input: {
    padding: "10px 20px",
    backgroundColor: "#f5f5f5",
    width: "100%",
    borderRight: "1px solid #cccccc",
  },
  button: {
    height: "100%",
    width: "100%",
  },
});

const AddTodo = ({ addTodo }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <Grid className={classes.searchBox} container justify="center">
      <Grid item xs={8}>
        <InputBase
          className={classes.input}
          placeholder="Add a new TODO"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          className={classes.button}
          color="primary"
          variant="text"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
