import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";

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
function CarwizCardAction(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.card}
      justify="space-between"
      alignItems="center"
    >
      {/* <CardActions> */}
      <Grid item xs={5}>
        <Button className={classes.icon}>{props.data.optionalText}</Button>
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
      {/* </CardActions> */}
    </Grid>
  );
}

export default CarwizCardAction;
