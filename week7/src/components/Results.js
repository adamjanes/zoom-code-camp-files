import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    marginTop: "20px",
  },
});

const Results = () => {
  const classes = useStyles();

  return (
    <>
      <h2>Here are your results!</h2>
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        laborum quam sunt? Illum ratione eveniet neque impedit praesentium at
        est cumque sapiente illo. Impedit quos nobis voluptatem debitis.
        Laboriosam, harum?Ipsum ea modi laborum nobis assumenda, tempora
        quisquam optio, quibusdam totam, repellat delectus ducimus minus dolor
        facilis dicta atque vero expedita sunt fugit! Numquam quod perferendis
        nam asperiores amet sint.
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
