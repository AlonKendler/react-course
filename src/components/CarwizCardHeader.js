import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

function CarwizCardHeader(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.header} variant="h5">
        {props.data.CardHeaderTitle}
      </Typography>
      <Typography className={classes.helpText} variant="subtitle1">
        {props.data.CardHeaderDescription}
      </Typography>
    </div>
  );
}

export default CarwizCardHeader;
