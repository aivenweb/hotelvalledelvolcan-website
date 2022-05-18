import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faLocationDot,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface HeaderTopProps {}

const HeaderTop: React.FC<HeaderTopProps> = () => {
  return (
    <div id="header-top">
      <div className="header-top">
        <div className="header-top-right">
          <span className="info">
            <FontAwesomeIcon icon={faCloud} /> 18 °C
          </span>
          <span className="info">
            <FontAwesomeIcon icon={faLocationDot} /> Herrero Ducloux 120,
            Copahue Q8348AGA Argentina
          </span>
          <span className="info">
            <FontAwesomeIcon icon={faPhone} /> +54 9 2942 66-9435
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
