import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NotificationSwitch from "./NotificationSwitch";

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
  },
  helpText: {
    color: "rgb(138,138,138)"
  }
}));

// TODO: do not use props object, use destructuring
// TODO: learn about prop-types and add them to all of your components

const NotificationItem = ({ title, text }) => {
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
        <Typography variant="h6">{title}</Typography>
        <Typography className={classes.helpText} variant="subtitle2">
          {text}
        </Typography>
      </Grid>
      <Grid item className={classes.switch} xs={1}>
        <NotificationSwitch />
      </Grid>
    </Grid>
  );
};

NotificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NotificationItem;
