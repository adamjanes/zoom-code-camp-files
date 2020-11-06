import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  title: {
    margin: "0px auto",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TODO LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
