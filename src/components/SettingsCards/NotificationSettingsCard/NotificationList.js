import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import NotificationItem from "./NotificationItem";

// import notificationData from "./notificationData";

const NotificationList = ({ data, handleNotificationChange }) => {
  const list = data.map(notification => {
    return (
      <div key={notification.id}>
        <NotificationItem
          isOn={notification.isOn}
          title={notification.title}
          text={notification.text}
          handleChange={handleNotificationChange}
          id={notification.id}
        />
        <Divider />
      </div>
    );
  });

  return <div className="notificationList">{list}</div>;
};

NotificationList.propTypes = {
  data: PropTypes.shape([]).isRequired,
  handleNotificationChange: PropTypes.func.isRequired
};

export default NotificationList;
