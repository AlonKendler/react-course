import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    boxShadow: "0 0px 2px 0 rgba(0, 0, 0, 0.35)",
    borderRadius: "3px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function PersonalForm() {
  const classes = useStyles();
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

  //   let streetClasses = ["textFieldStreet"];

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="שם"
        className={classes.textField}
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="טלפון"
        className={classes.textField}
        value={values.phone}
        onChange={handleChange("phone")}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="אמייל"
        className={classes.textField}
        value={values.email}
        onChange={handleChange("email")}
        margin="normal"
      />
      <TextField
        id="standard-password-input"
        label="סיסמה"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="רחוב"
        className={classes.textField}
        value={values.streetName}
        onChange={handleChange("streetName")}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="מספר"
        className="textFieldStreet"
        value={values.streetNum}
        onChange={handleChange("streetNum")}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="עיר"
        className="textFieldStreet"
        value={values.city}
        onChange={handleChange("city")}
        margin="normal"
      />
    </form>
  );
}
