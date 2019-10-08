import React from "react";
import messages from "./messages";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  color: {
    backgroundColor: "rgb(47, 114, 133)"
  }
}));
function PersonalCardAction() {
  const classes = useStyles();
  return (
    <Grid container direction="row-reverse">
      <CardActions>
        <Button>{messages.abort}</Button>
        <Fab
          className={classes.color}
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
        >
          {messages.updateInfo}
        </Fab>
      </CardActions>
    </Grid>
  );
}

export default PersonalCardAction;
