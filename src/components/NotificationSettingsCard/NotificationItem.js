import React from "react";
import NotificationSwitch from "./NotificationSwitch";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    paddingRight: "30px"
  },
  switch: {
    marginLeft: theme.spacing(0)
  },
  header: {
    fontWeight: "bold"
  }
}));
function NotificationItem(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.container}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={11}>
        <Typography variant="subtitle1" className={classes.header}>
          {props.head}
        </Typography>
        <Typography variant="subtitle2">{props.text}</Typography>
      </Grid>
      <Grid item className={classes.switch} xs={1}>
        <NotificationSwitch />
      </Grid>
    </Grid>
  );
}

export default NotificationItem;
