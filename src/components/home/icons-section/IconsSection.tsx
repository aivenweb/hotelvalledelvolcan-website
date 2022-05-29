import React from "react";
import IconComponent from "./IconComponent";
import "./IconsSection.css";

interface IconsSectionProps {}

const IconsSection: React.FC<IconsSectionProps> = () => {
  return (
    <div id="icon-section">
      <section className="best">
        <div className="container">
          <div className="row">
            <IconComponent
              title="WI-FI"
              image="/assets/images/icons/wifi-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <IconComponent
              title="Tv satelital"
              image="/assets/images/icons/tv-satelital-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <IconComponent
              title="Comodidad"
              image="/assets/images/icons/comodidad-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <IconComponent
              title="Restaurante"
              image="/assets/images/icons/restaurante-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <IconComponent
              title="Lavandería"
              image="/assets/images/icons/lavanderia-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <IconComponent
              title="Pool"
              image="/assets/images/icons/pool-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <IconComponent
              title="Gimnasia"
              image="/assets/images/icons/yoga-hotel-valle-del-volcan.png"
              imageDescription="alt"
            />
            <IconComponent
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
