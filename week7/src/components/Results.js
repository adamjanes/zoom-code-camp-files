import React, { useContext } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { TextContext } from "../contexts/TextContext";

const useStyles = makeStyles({
  button: {
    marginTop: "20px",
  },
});

const Results = ({ title }) => {
  const classes = useStyles();
  const { text } = useContext(TextContext);

  return (
    <>
      <h2>{title}</h2>
      <Typography variant="body1">
        {text}
      </Typography>
      <Button
        className={classes.button}
        fullWidth
        size="large"
        variant="outlined"
      >
        Play Again
      </Button>
    </>
  );
};

export default Results;
