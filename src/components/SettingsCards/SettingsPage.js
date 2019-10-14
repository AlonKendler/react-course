import React, { useState } from "react";
import NotificationSettingsCard from "./NotificationSettingsCard";
import PersonalSettingsCard from "./PersonalSettingsCard";

// TODO  (read about container components vs components )
// TODO: do not use <div> if there is no need
// TODO: create a SettingsPage container that will contain all of the component's logic

// TODO: add functionallity that when you press "אני לא רוצה לקבל שום הודעות"
// TODO: it switches off all of the notification

// TODO: make components able to get and past data from/to server.
// TODO: crate data object with settings and pass them to the components
// const settingsData = {

// };

// THEORITICALLY
// 1-> get the settings data from the server
// 2-> display them on the settigns card
// 3-> user changes data as he wishes
// 4-> when user presses save it saves the data

const settingsData = {
  notificationData: [
    {
      id: 1,
      title: '"הצעות אישיות הגיעו"',
      text: "נעדכן אותך כשהסוכנויות השונות חוזרות אלייך",
      isOn: true
    },
    {
      id: 12,
      title: '"asdasddas"',
      text: "הודעות אלו מאפשרות מעקב אחרי השוק ועדכניות",
      isOn: false
    },
    {
      id: 2,
      title: '"עדכוני מידע רכב"',
      text: "הודעות אלו מאפשרות מעקב אחרי השוק ועדכניות",
      isOn: true
    },
    {
      id: 3,
      title: '"מבצעים והטבות"',
      text: "ההצעות הכי טובות שיש מגיעיות אלייך ישירות",
      isOn: true
    },
    {
      id: 4,
      title: '"עדכון נוסף המציין מלכים"',
      text: "חג בחירות שמח",
      isOn: true
    }
  ],
  profileData: {
    name: "אלון קנדלר",
    phone: "0525848830",
    email: "alonkend@gmail.com",
    password: "11111",
    streetName: "הגולן",
    streetNum: "57",
    city: "tel aviv"
  }
};

const SettingsPage = () => {
  // const data = useFechDataFromServer('/someUrl/someApi/settings')
  const [data, setData] = useState(settingsData);

  const handleNotificationChange = (id, value) => {
    const selectedNotification = data.notificationData.find(n => n.id === id);
    selectedNotification.isOn = value;

    setData({
      notificationData: data.notificationData,
      profileData: data.profileData
    });
  };

  const toggleOffAllNotifications = () => {
    for (let i = 0; i < data.notificationData.length; i += 1) {
      data.notificationData[i].isOn = false;
    }
    setData({
      notificationData: data.notificationData,
      profileData: data.profileData
    });
  };

  return (
    <>
      <NotificationSettingsCard
        data={data.notificationData}
        handleNotificationChange={handleNotificationChange}
        toggleOffAllNotifications={toggleOffAllNotifications}
      />
      <PersonalSettingsCard data={data.profileData} />
    </>
  );
};

export default SettingsPage;
