import React from "react";
import NotificationSwitch from "./NotificationSwitch";

function NotificationItem(props) {
  return (
    <div className="flexColumn">
      <div>
        <div className="textBold">{props.head}</div>
        <div className="textReg">{props.text}</div>
      </div>
      <NotificationSwitch />
    </div>
  );
}

export default NotificationItem;
