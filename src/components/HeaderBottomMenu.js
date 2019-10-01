import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {  
    display: "none"
  }
}));

const HeaderBottomMenu = () => {
  const classes = useStyles();
  return (
    <div className="headBotomMenu">
      <Button
        color="default"
        variant="contained"
        // fullWidth="false"
        size="small"
        className={classes.button}
      >
        ההצעות האישיות שלי
      </Button>
      <Button
        color="default"
        variant="contained"
        // fullWidth="false"
        size="small"
        className={classes.button}
      >
        הרכבים ששמרתי
      </Button>
      <Button
        color="default"
        variant="contained"
        // fullWidth="false"
        size="small"
        className={classes.button}
      >
        הגדרות
      </Button>
      <Button
        color="default"
        variant="contained"
        // fullWidth="false"
        size="small"
        className={classes.button}
      >
        הוספת רכב
      </Button>
    </div>
  );
};

export default HeaderBottomMenu;
