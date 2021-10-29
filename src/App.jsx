import React from "react";
import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";
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
