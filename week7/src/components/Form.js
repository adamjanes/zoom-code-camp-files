import React, { useState } from "react";
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
  const [answers, setAnswers] = useState({});
  const { blanks } = data;

  const renderBlanks = () =>
    blanks.map((label, index) => (
      <TextField
        key={index}
        className={classes.textField}
        label={label}
        variant="outlined"
        fullWidth
        value={answers[index] || ""}
        onChange={(event) => {
          setAnswers({ ...answers, [index]: event.target.value });
        }}
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
        onClick={() => {
          console.log(answers)
        }}
      >
        Create Mad Lib
      </Button>
    </form>
  );
};

export default Form;
