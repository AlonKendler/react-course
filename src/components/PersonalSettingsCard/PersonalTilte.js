import React from "react";
import messages from "./messages";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  },
  header: {
    fontWeight: "bold"
  }
}));

function PersonalTitle() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.header} variant="h5">
        {messages.personalSettingsTitle}
      </Typography>
      <Typography variant="subtitle1">
        {messages.personalSettingsDescription}
      </Typography>
    </div>
  );
}

export default PersonalTitle;
