import React from "react";
import messages from "./messages";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  icon: {
    color: "rgb(47, 114, 133)"
  }
}));

function PasswordText() {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item>
        <AutorenewIcon className={classes.icon}></AutorenewIcon>
      </Grid>
      <Grid item>
        <Typography className={classes.icon}>{messages.difPass}</Typography>
      </Grid>
    </Grid>
  );
}

export default PasswordText;
