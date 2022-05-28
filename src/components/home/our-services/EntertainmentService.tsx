import React from "react";
import ServicesCard from "./ServicesCard";

interface EntertainmentServiceProps {}

const EntertainmentService: React.FC<EntertainmentServiceProps> = () => {
  return (
    <>
      <ServicesCard
        title="Entretenimiento"
        description="Hotel Valle del Volcán ofrece diversas actividades para su entretenimiento."
        image="/assets/images/entretenimiento-hotel-valle-del-volcan.jpg"
        imageDescription="ALT"
      />
    </>
  );
};

export default EntertainmentService;
