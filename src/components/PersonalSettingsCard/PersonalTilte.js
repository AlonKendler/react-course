import React from "react";
import messages from "./messages";

//TODO : instead of writing plain text in the components
// create messages.js file for each component and set it's messages there.

//TODO do not use divs for text components, use TYPOGRAPHY
function PersonalTitle() {
  return (
    <div className="titleHeader">
      <div className="titleBold">{messages.personalSettingsTitle}</div>
      <div className="titleReg">{messages.personalSettingsDescription}</div>
    </div>
  );
}

export default PersonalTitle;
