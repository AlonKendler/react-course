import React from "react";
import NotificationSettingsCard from "./components/SettingsCards/NotificationSettingsCard";
import PersonalSettingsCard from "./components/SettingsCards/PersonalSettingsCard";

// TODO  (read about container components vs components )
// TODO: do not use <div> if there is no need
// TODO: create a SettingsPage container that will contain all of the component's logic

// TODO: add functionallity that when you press "אני לא רוצה לקבל שום הודעות"
// TODO: it switches off all of the notification

// TODO: make components able to get and past data from/to server.
// TODO: crate data object with settings and pass them to the components
// const settingsData = {

// };

// THEORITICALLY
// 1-> get the settings data from the server
// 2-> display them on the settigns card
// 3-> user changes data as he wishes
// 4-> when user presses save it saves the data

const SettingsPage = () => {
  return (
    <>
      <NotificationSettingsCard />
      <PersonalSettingsCard />
    </>
  );
};

export default SettingsPage;
