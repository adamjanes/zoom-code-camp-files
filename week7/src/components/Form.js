import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles({
  textField: {
    margin: "10px 0px",
    textTransform: "capitalize",
  },
  button: {
    marginTop: "20px",
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <form autoComplete="off">
      <TextField
        className={classes.textField}
        label="Adjective"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={classes.textField}
        label="Noun"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={classes.textField}
        label="A Place"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={classes.textField}
        label="Adjective"
        variant="outlined"
        fullWidth
      />
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="primary"
        fullWidth
      >
        Create Mad Lib
      </Button>
    </form>
  );
};

export default Form;
