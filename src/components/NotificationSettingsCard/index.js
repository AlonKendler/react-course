import React from "react";
import NotificationTitle from "./NotificationTitle";
import NotificationList from "./NotificationList";
import NotificationCardAction from "./NotificationCardAction";

// TODO use a generic title component for both settigns card
// TODO use generic actions compoenrt for both settigns card
// TODO use mui Card component and not plain css
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
