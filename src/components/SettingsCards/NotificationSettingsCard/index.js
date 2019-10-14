import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import NotificationList from "./NotificationList";
import SettingsAction from "../SettingsAction";
import SettingsHeader from "../SettingsHeader";
import messages from "./messages";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

const NotificationSettingsCard = ({
  data,
  handleNotificationChange,
  toggleOffAllNotifications
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <SettingsHeader
        title={messages.cardHeaderTitle}
        description={messages.cardHeaderDescription}
      />
      <Divider />
      <NotificationList
        data={data}
        handleNotificationChange={handleNotificationChange}
      />
      <Divider />
      <SettingsAction
        updateInfo={messages.updateInfo}
        abort={messages.abort}
        optionalText={messages.optionalText}
        toggleOffAllNotifications={toggleOffAllNotifications}
      />
    </Card>
  );
};
NotificationSettingsCard.propTypes = {
  data: PropTypes.shape([]).isRequired,
  handleNotificationChange: PropTypes.func.isRequired,
  toggleOffAllNotifications: PropTypes.func.isRequired
};
export default NotificationSettingsCard;
