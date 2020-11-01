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

const Form = ({ data }) => {
  const classes = useStyles();
  const { blanks } = data;

  const renderBlanks = () =>
    blanks.map((label, index) => (
      <TextField
        key={index}
        className={classes.textField}
        label={label}
        variant="outlined"
        fullWidth
      />
    ));

  return (
    <form autoComplete="off">
      {/* Only render this if blanks isn't undefined. */}
      {blanks && renderBlanks()}
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
