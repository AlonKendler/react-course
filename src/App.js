import React from "react";
import "./App.css";
import HeaderLeftBox from "./components/HeaderLeftBox";
import HeaderRightBox from "./components/HeaderRightBox";
import HeaderBottomMenu from "./components/HeaderBottomMenu";
import NotificationSettingsCard from "./components/NotificationSettingsCard/NotificationSettingsCard";
import PersonalSettingsCard from "./components/PersonalSettingsCard/PersonalSettingsCard";

function App() {
  return (
    <div dir="rtl">
      <div className="flex-conteiner">
        <div className="conteiner-div">
          <HeaderRightBox />
          <HeaderLeftBox />
        </div>
        <h2 id="titleName">שלום משתמש</h2>
        <HeaderBottomMenu />
      </div>
      <NotificationSettingsCard />
      <PersonalSettingsCard />
    </div>
  );
}

export default App;
