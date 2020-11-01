import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mad Libs
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
