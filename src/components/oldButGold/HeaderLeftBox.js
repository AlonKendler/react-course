import React from "react";
import defaultPic from "../images/default_img.png";

const HeaderLeftBox = () => {
  return (
    <div className="header-leftBox">
      <button className="headerButtons" id="btn10">
        התחבר
      </button>
      <img
        src={defaultPic}
        alt="profile_Default"
        className="avatar"
        id="profilePic"
      />
      <h4 id="profileName">profile</h4>
    </div>
  );
};

export default HeaderLeftBox;
