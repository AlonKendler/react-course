import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Typography from "@material-ui/core/Typography";
import messages from "./messages";

const useStyles = makeStyles(() => ({
  icon: {
    color: "rgb(47, 114, 133)"
  }
}));

const PasswordText = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item>
        <AutorenewIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <Typography className={classes.icon}>{messages.difPass}</Typography>
      </Grid>
    </Grid>
  );
};

export default PasswordText;
