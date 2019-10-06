import React from "react";
import PersonalTitle from "./PersonalTilte";
import PersonalCardAction from "./PersonalCardAction";
import PersonalForm from "./PersonalForm";
// import NotificationTitle from "./NotificationTitle";
// import NotificationList from "./NotificationList";
// import NotificationCardAction from "./NotificationCardAction";

// TODO: don't use a "global" stylesheet
// read about CSS-IN-JS
// apply CSS-IN-JS
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
