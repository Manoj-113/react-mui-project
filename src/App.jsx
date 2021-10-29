import React from "react";
import { Person } from "@material-ui/icons-material";
import { Button } from "@material-ui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: "white",
    backgroundColor: "black",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Person />}
        className={classes.button}
      >
        Material UI
      </Button>
    </div>
  );
};

export default App;
