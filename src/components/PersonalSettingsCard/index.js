import React from "react";
import PersonalTitle from "./PersonalTilte";
import PersonalCardAction from "./PersonalCardAction";
import PersonalForm from "./PersonalForm";
// import NotificationTitle from "./NotificationTitle";
// import NotificationList from "./NotificationList";
// import NotificationCardAction from "./NotificationCardAction";

function PersonalSettingsCard() {
  return (
    <div className="settingsCard">
      <PersonalTitle />
      <PersonalForm />
      <PersonalCardAction />
    </div>
  );
}

export default PersonalSettingsCard;
