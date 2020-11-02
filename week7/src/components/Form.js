import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { TextContext } from "../contexts/TextContext";

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
  const history = useHistory();
  const { setText } = useContext(TextContext);
  const { blanks, value } = data;

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

  const generateText = (answers) =>
    value.reduce(
      (acc, curr, index) => `${acc} ${curr || ""} ${answers[index] || ""}`,
      ""
    );

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
          const text = generateText(answers);
          setText(text);
          history.push("/results")
        }}
      >
        Create Mad Lib
      </Button>
    </form>
  );
};

export default Form;
