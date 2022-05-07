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
            <i className="ion-ios-location-outline"></i> Herrero Ducloux 120, Copahue Q8348AGA Argentina
          </span>
          <span>
            <i className="fa fa-phone" aria-hidden="true"></i> +54 9 2942 66-9435
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
