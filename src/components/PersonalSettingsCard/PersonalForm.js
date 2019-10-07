import React from "react";
import messages from "./messages";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PasswordText from "./PasswordText";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%"
  },
  textFieldWrap: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  icon: {
    color: "rgb(47, 114, 133)"
  }
}));

function PersonalForm() {
  const classes = useStyles();
  //TODO read about use state and hooks before you write this code
  const [values, setValues] = React.useState({
    name: "אלון קנדלר",
    phone: "0525848830",
    email: "alonkend@gmail.com",
    password: "11111",
    streetName: "הגולן",
    streetNum: "57",
    city: "tel aviv"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form noValidate autoComplete="off">
      <Grid container>
        <Grid item className={classes.textFieldWrap} xs={12} sm={6}>
          <TextField
            label={messages.name}
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
        </Grid>
        <Grid item className={classes.textFieldWrap} xs={12} sm={6}>
          <TextField
            label={messages.phone}
            className={classes.textField}
            value={values.phone}
            onChange={handleChange("phone")}
            margin="normal"
          />
        </Grid>
        <Grid item className={classes.textFieldWrap} xs={12} sm={6}>
          <TextField
            label={messages.email}
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />
        </Grid>
        <Grid item className={classes.textFieldWrap} xs={12} sm={6}>
          <TextField
            label={messages.password}
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <PasswordText />
        </Grid>
        <Grid item className={classes.textFieldWrap} xs={6} sm={4}>
          <TextField
            label={messages.street}
            className={classes.textField}
            value={values.streetName}
            onChange={handleChange("streetName")}
            margin="normal"
          />
        </Grid>
        <Grid item className={classes.textFieldWrap} xs={6} sm={4}>
          <TextField
            label={messages.houseNumber}
            className={classes.textField}
            value={values.streetNum}
            onChange={handleChange("streetNum")}
            margin="normal"
          />
        </Grid>
        <Grid item className={classes.textFieldWrap} xs={12} sm={4}>
          <TextField
            label={messages.city}
            className={classes.textField}
            value={values.city}
            onChange={handleChange("city")}
            margin="normal"
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default PersonalForm;
