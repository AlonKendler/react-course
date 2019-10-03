import React from "react";
import "./App.css";
import HeaderLeftBox from "./components/HeaderLeftBox";
import HeaderRightBox from "./components/HeaderRightBox";
import HeaderBottomMenu from "./components/HeaderBottomMenu";
import NotificationSettingsCard from "./components/NotificationSettingsCard/NotificationSettingsCard";
import PersonalSettingsCard from "./components/PersonalSettingsCard";

// TODO: use Typograpgy COMPONENT from mat.ui instead of default HTML text

function App() {
  return (
    <div>
      <NotificationSettingsCard />
      <PersonalSettingsCard />
    </div>
  );
}

export default App;

// UNDONE: bad head menu,

// <div className="flex-conteiner">
//   <div className="conteiner-div">
//     <HeaderRightBox />
//     <HeaderLeftBox />
//   </div>
//   <h2 id="titleName">שלום משתמש</h2>
//   <HeaderBottomMenu />
// </div>
