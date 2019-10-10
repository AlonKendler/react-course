import React from "react";
import Divider from "@material-ui/core/Divider";
import NotificationItem from "./NotificationItem";
import notificationData from "./notificationData";

const NotificationList = () => {
  const list = notificationData.map(notification => {
    return (
      <div key={notification.id}>
        <NotificationItem title={notification.title} text={notification.text} />
        <Divider />
      </div>
    );
  });

  return <div className="notificationList">{list}</div>;
};

export default NotificationList;
