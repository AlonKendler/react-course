import React from "react";

//TODO : instead of writing plain text in the components
// create messages.js file for each component and set it's messages there

//TODO do not use divs for text components, use TYPOGRAPHY
function PersonalTitle() {
  return (
    <div className="titleHeader">
      <div className="titleBold">הגדרות אישיות</div>
      <div className="titleReg">
        ניתן לעדכן את הגדרות החשבון שלך. שים לב, עדכון הכתובת שלך יעדכן את
        ההדפות החיפוש שלך באופן אוטומטי.
      </div>
    </div>
  );
}

export default PersonalTitle;
