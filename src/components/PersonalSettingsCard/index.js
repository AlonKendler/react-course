import React from "react";
import PersonalTitle from "./PersonalTilte";
import PersonalCardAction from "./PersonalCardAction";
import PersonalForm from "./PersonalForm";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

// TODO use a generic title component for both settigns card
// TODO use generic actions compoenrt for both settigns card
// TODO use mui Card component and not plain css
// TODO: don't use a "global" stylesheet
// read about CSS-IN-JS
// apply CSS-IN-JS
function PersonalSettingsCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <PersonalTitle />
      <Divider />
      <PersonalForm />
      <Divider />
      <PersonalCardAction />
    </Card>
  );
}

export default PersonalSettingsCard;
