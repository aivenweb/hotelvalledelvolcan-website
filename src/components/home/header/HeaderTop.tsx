import React from "react";

interface HeaderTopProps {}

const HeaderTop: React.FC<HeaderTopProps> = () => {
  return (
    <div id="header-top">
      <div className="header-top">
        <div className="header-top-left">
          <span>
            <i className="ion-android-cloud-outline"></i>18 °C
          </span>
          <span>
            <i className="ion-ios-location-outline"></i> 121 King Str, Melbourne
            Victoria
          </span>
          <span>
            <i className="fa fa-phone" aria-hidden="true"></i> 1-548-854-8898
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
