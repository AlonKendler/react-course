import React from "react";
import NotificationItem from "./NotificationItem";
import notificationData from "./notificationData";
import Divider from "@material-ui/core/Divider";

function NotificationList() {
  const list = notificationData.map(notification => {
    return (
      <div key={notification.id}>
        <NotificationItem head={notification.head} text={notification.text} />
        <Divider />
      </div>
    );
  });

  return <div className="notificationList">{list}</div>;
}

export default NotificationList;
