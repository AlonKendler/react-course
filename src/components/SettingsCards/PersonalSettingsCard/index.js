import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SettingsAction from "../SettingsAction";
import SettingsHeader from "../SettingsHeader";
import messages from "./messages";
import PersonalForm from "./PersonalForm";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

const PersonalSettingsCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <SettingsHeader
        title={messages.cardHeaderTitle}
        description={messages.cardHeaderDescription}
      />
      <Divider />
      <PersonalForm />
      <Divider />
      <SettingsAction
        updateInfo={messages.updateInfo}
        abort={messages.abort}
        optionalText={messages.optionalText}
      />
    </Card>
  );
};

export default PersonalSettingsCard;
