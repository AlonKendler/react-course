import React from "react";
import NotificationItem from "./NotificationItem";
import notificationData from "./notificationData";

function NotificationList() {
  const list = notificationData.map(notification => {
    return (
      <NotificationItem
        key={notification.id}
        head={notification.head}
        text={notification.text}
      />
    );
  });

  return <div className="notificationList">{list}</div>;
}

export default NotificationList;
