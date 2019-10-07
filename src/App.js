import React from "react";
import "./App.css";
import NotificationSettingsCard from "./components/NotificationSettingsCard";
import PersonalSettingsCard from "./components/PersonalSettingsCard";

// TODO: use Typograpgy COMPONENT from mat.ui instead of default HTML text
// TODO: make good use of props passaing, so that your container will be APP.js
// TODO  (read about container components vs components )

function App() {
  return (
    <div>
      <NotificationSettingsCard data={[]} />
      <PersonalSettingsCard />
    </div>
  );
}

export default App;
