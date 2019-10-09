import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  color: {
    backgroundColor: "rgb(47, 114, 133)"
  }
}));
function CarwizCardAction(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row-reverse" justify="space-between">
      <CardActions>
        <Grid item>
          <Typography>{props.data.optionalText}</Typography>
        </Grid>
        <Grid item>
          <Button>{props.data.abort}</Button>
          <Fab
            className={classes.color}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            {props.data.updateInfo}
          </Fab>
        </Grid>
      </CardActions>
    </Grid>
  );
}

export default CarwizCardAction;
