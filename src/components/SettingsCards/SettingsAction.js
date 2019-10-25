import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  color: {
    backgroundColor: "rgb(47, 114, 133)"
  },
  icon: {
    color: "rgb(47, 114, 133)"
  },
  card: {
    padding: theme.spacing(1)
  }
}));
const SettingsAction = ({
  updateInfo,
  abort,
  optionalText,
  toggleOffAllNotifications
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.card}
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={5}>
        <Button className={classes.icon} onClick={toggleOffAllNotifications}>
          {optionalText}
        </Button>
      </Grid>
      <Grid item>
        <Button>{abort}</Button>
        <Fab
          className={classes.color}
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
        >
          {updateInfo}
        </Fab>
      </Grid>
    </Grid>
  );
};

SettingsAction.propTypes = {
  updateInfo: PropTypes.string.isRequired,
  abort: PropTypes.string.isRequired,
  optionalText: PropTypes.string,
  toggleOffAllNotifications: PropTypes.func
};

SettingsAction.defaultProps = {
  optionalText: "",
  toggleOffAllNotifications: null
};

export default SettingsAction;
