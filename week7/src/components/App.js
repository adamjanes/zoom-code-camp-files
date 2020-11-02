import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Form from "./Form";
import Results from "./Results";

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
    flexDirection: "column",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    axios("http://madlibz-app.herokuapp.com/api/random").then(({ data }) => {
      setData(data);
    });
  }, []);

  console.log(data)

  return (
    <div className={classes.app}>
      <Header />
      <Container className={classes.container} maxWidth="sm">
        <Paper className={classes.paper}>
          <Switch>
            <Route exact path="/">
              <h3>Let's play Mad Libs!</h3>
              <Form data={data} />
            </Route>
            <Route path="/results">
              <Results title={data.title} />
            </Route>
          </Switch>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
