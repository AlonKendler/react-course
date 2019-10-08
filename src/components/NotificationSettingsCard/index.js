import React from "react";
import NotificationTitle from "./NotificationTitle";
import NotificationList from "./NotificationList";
import NotificationCardAction from "./NotificationCardAction";
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
function NotificationSettingsCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <NotificationTitle />
      <Divider />
      <NotificationList />
      <Divider />
      <NotificationCardAction />
    </Card>
  );
}

export default NotificationSettingsCard;
