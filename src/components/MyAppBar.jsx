import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  FormControlLabel,
  Switch,
  makeStyles,
} from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const MyAppBar = ({ autoUpdate, handleAutoUpdate, onRunHandler }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Editor
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={autoUpdate}
              onChange={handleAutoUpdate}
              name="autoUpdate"
            />
          }
          label="Auto-Update"
        />
        <Button
          variant="contained"
          className="classes.runBtn"
          color="secondary"
          disabled={autoUpdate}
          onClick={onRunHandler}
          endIcon={<PlayCircleFilledIcon />}
        >
          Run
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
