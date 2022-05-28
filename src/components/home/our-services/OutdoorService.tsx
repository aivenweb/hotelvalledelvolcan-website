import React from "react";
import ServicesCard from "./ServicesCard";

interface OutdoorServiceProps {}

const OutdoorService: React.FC<OutdoorServiceProps> = () => {
  return (
    <>
      <ServicesCard
        title="Actividades al aire libre"
        description="Copahue les ofrece a todos los turistas diversas actividades al aire libre."
        image="/assets/images/actividades-hotel-valle-del-volcan.jpg"
        imageDescription="ALT"
      />
    </>
  );
};

export default OutdoorService;
