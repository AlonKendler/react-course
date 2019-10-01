import React from "react";

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
