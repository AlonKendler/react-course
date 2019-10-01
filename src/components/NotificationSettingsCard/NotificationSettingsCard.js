import React from "react";
import NotificationTitle from "./NotificationTitle";
import NotificationList from "./NotificationList";
import NotificationCardAction from "./NotificationCardAction";

function NotificationSettingsCard() {
  return (
    <div className="settingsCard">
      <NotificationTitle />
      <NotificationList />
      <NotificationCardAction />
    </div>
  );
}

export default NotificationSettingsCard;
