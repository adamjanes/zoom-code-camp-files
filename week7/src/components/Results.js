import React, { useContext } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TextContext } from "../contexts/TextContext";

const useStyles = makeStyles({
  link: {
    textDecoration: "none"
  },
  button: {
    marginTop: "20px",
  },
});

const Results = ({ title }) => {
  const classes = useStyles();
  const { text } = useContext(TextContext);

  if (!text) {
    return (
      <>
      <h2>Fill out the form to see results here.</h2>
      <Link to="/" className={classes.link}>
        <Button
          className={classes.button}
          fullWidth
          size="large"
          variant="outlined"
        >
          Go to form
        </Button>
      </Link>
      </>
    );
  }
  return (
    <>
      <h2>{title}</h2>
      <Typography variant="body1">{text}</Typography>
      <Link to="/" className={classes.link}>
        <Button
          className={classes.button}
          fullWidth
          size="large"
          variant="outlined"
        >
          Play Again
        </Button>
      </Link>
    </>
  );
};

export default Results;
