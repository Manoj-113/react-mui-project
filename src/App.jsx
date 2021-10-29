import React from "react";
import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.success.main,
  },
}));

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
