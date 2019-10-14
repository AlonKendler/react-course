import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import NotificationList from "./NotificationList";
import SettingsAction from "../SettingsAction";
import SettingsHeader from "../SettingsHeader";
import messages from "./messages";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

const NotificationSettingsCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <SettingsHeader
        title={messages.cardHeaderTitle}
        description={messages.cardHeaderDescription}
      />
      <Divider />
      <NotificationList />
      <Divider />
      <SettingsAction
        updateInfo={messages.updateInfo}
        abort={messages.abort}
        optionalText={messages.optionalText}
      />
    </Card>
  );
};

export default NotificationSettingsCard;
