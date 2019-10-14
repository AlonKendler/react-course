import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  },
  header: {
    fontWeight: "bold"
  },
  helpText: {
    color: "rgb(138,138,138)"
  }
}));

const SettingsHeader = ({ title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.header} variant="h5">
        {title}
      </Typography>
      <Typography className={classes.helpText} variant="subtitle1">
        {description}
      </Typography>
    </div>
  );
};

SettingsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

SettingsHeader.defaultProps = {
  description: ""
};

export default SettingsHeader;
