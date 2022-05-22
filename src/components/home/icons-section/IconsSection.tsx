import React from "react";
import Icon from "./Icon";
import "./IconsSection.css";

interface IconsSectionProps {}

const IconsSection: React.FC<IconsSectionProps> = () => {
  return (
    <div id="icon-section">
      <section className="best">
        <div className="container">
          <div className="row">
            <Icon
              title="WI-FI"
              image="/assets/images/icons/wifi-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <Icon
              title="Tv satelital"
              image="/assets/images/icons/tv-satelital-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <Icon
              title="Comodidad"
              image="/assets/images/icons/comodidad-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <Icon
              title="Restaurante"
              image="/assets/images/icons/restaurante-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <Icon
              title="Lavandería"
              image="/assets/images/icons/lavanderia-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <Icon
              title="Pool"
              image="/assets/images/icons/pool-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <Icon
              title="Yoga"
              image="/assets/images/icons/yoga-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <Icon
              title="Caja fuerte"
              image="/assets/images/icons/caja-fuerte-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconsSection;
