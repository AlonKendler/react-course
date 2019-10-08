import React from "react";
import "./App.css";
import NotificationSettingsCard from "./components/NotificationSettingsCard";
import PersonalSettingsCard from "./components/PersonalSettingsCard";
import notificationMessages from "./components/NotificationSettingsCard/messages";
import personalMessages from "./components/PersonalSettingsCard/messages";

// TODO: make good use of props passaing, so that your container will be APP.js
// TODO  (read about container components vs components )

function App() {
  return (
    <div>
      <NotificationSettingsCard data={notificationMessages} />
      <PersonalSettingsCard data={personalMessages} />
    </div>
  );
}

export default App;
