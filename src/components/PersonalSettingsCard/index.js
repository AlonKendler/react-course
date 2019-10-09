import React from "react";
import PersonalForm from "./PersonalForm";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CarwizCardAction from "../CarwizCardAction";
import CarwizCardHeader from "../CarwizCardHeader";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

function PersonalSettingsCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CarwizCardHeader data={props.data} />
      <Divider />
      <PersonalForm />
      <Divider />
      <CarwizCardAction data={props.data} />
    </Card>
  );
}

export default PersonalSettingsCard;
