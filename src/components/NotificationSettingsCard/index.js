import React from "react";
import NotificationTitle from "./NotificationTitle";
import NotificationList from "./NotificationList";
import NotificationCardAction from "./CarwizCardAction";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  }
}));

function NotificationSettingsCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <NotificationTitle />
      <Divider />
      <NotificationList />
      <Divider />
      <NotificationCardAction data={props.data} />
    </Card>
  );
}

export default NotificationSettingsCard;
