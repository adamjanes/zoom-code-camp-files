import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";

import Header from "./Header";
import Form from "./Form";

const useStyles = makeStyles({
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    flex: 1,
    padding: "20px",
    margin: "10px 0px",
    display: "flex",
    flexDirection: "column"
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <Container className={classes.container} maxWidth="sm">
        <Paper className={classes.paper}>
          <h3>Let's play Mad Libs!</h3>
          <Form />
        </Paper>
      </Container>
    </div>
  );
};

export default App;
