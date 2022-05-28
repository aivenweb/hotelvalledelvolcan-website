import React from "react";
import ServicesCard from "./ServicesCard";

interface RoomServiceProps {}

const RoomService: React.FC<RoomServiceProps> = () => {
  return (
    <>
      <ServicesCard
        title="Habitaciones"
        description="Nuestras instalaciones están totalmente equipadas para garantizar su comodidad."
        image="/assets/images/habitacion-hotel-valle-del-volcan.jpg"
        imageDescription="ALT"
      />
    </>
  );
};

export default RoomService;
