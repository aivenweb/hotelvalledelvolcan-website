import React from "react";

interface HeaderTopProps {}

const HeaderTop: React.FC<HeaderTopProps> = () => {
  return (
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

      <div className="header-top-right">
        <ul>
          <li className="dropdown">
            <a
              href="http://landing.engotheme.com/html/skyline/demo/login.html"
              title="LOGIN"
              className="dropdown-toggle"
            >
              LOGIN
            </a>
          </li>
          <li className="dropdown">
            <a
              href="http://landing.engotheme.com/html/skyline/demo/register.html"
              title="REGISTER"
              className="dropdown-toggle"
            >
              REGISTER
            </a>
          </li>
          <li className="dropdown">
            <a
              href="http://landing.engotheme.com/html/skyline/demo/index.html#"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              USD <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li className="active">
                <a href="http://landing.engotheme.com/html/skyline/demo/index.html#">
                  USD
                </a>
              </li>
              <li>
                <a href="http://landing.engotheme.com/html/skyline/demo/index.html#">
                  EUR
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              href="http://landing.engotheme.com/html/skyline/demo/index.html#"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              ENG <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li className="active">
                <a href="http://landing.engotheme.com/html/skyline/demo/index.html#">
                  ENG
                </a>
              </li>
              <li>
                <a href="http://landing.engotheme.com/html/skyline/demo/index.html#">
                  JP
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
