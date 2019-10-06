import React from "react";

// TODO do not use button html tag - use the material ui button and customize it
// TODO use typographt and not span
// TODO use mui Grid not css-flex
function NotificationCardAction() {
  return (
    <div className="flexColumn">
      <span className="actionCardText">לא רוצה לקבל שום הודעה מכם</span>
      <div>
        <button className="actionButtonCancel">בטל</button>
        <button className="actionButton">עדכן הודעות</button>
      </div>
    </div>
  );
}

export default NotificationCardAction;
