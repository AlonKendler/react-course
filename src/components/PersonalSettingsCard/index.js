import React from "react";
import PersonalTitle from "./PersonalTilte";
// import PersonalCardAction from "./PersonalCardAction";
import PersonalForm from "./PersonalForm";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CarwizCardAction from "../NotificationSettingsCard/CarwizCardAction";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

// TODO use a generic title component for both settigns card
// TODO use generic actions component for both settigns card
function PersonalSettingsCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <PersonalTitle />
      <Divider />
      <PersonalForm />
      <Divider />
      <CarwizCardAction data={props.data} />
    </Card>
  );
}

export default PersonalSettingsCard;
