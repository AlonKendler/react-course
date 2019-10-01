import React from "react";
import logo from "../images/carwizLogo.png";

const HeaderRightBox = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <button className="headerButtons" id="btn1">
        בחרו רכב
      </button>
      <button className="headerButtons" id="btn2">
        מחירי רכב LIVE
      </button>
      <button className="headerButtons" id="btn3">
        השוואת רכבים
      </button>
      <button className="headerButtons" id="btn4">
        מדריכים ומחשבונים
      </button>
      <button className="headerButtons" id="btn5">
        אודותינו
      </button>
    </div>
  );
};

export default HeaderRightBox;
