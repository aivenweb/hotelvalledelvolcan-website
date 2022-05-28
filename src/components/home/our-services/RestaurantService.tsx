import React from "react";
import ServicesCard from "./ServicesCard";

interface RestaurantServiceProps {}

const RestaurantService: React.FC<RestaurantServiceProps> = () => {
  return (
    <>
      <ServicesCard
        title="Restaurante"
        description="En Hotel Valle del Volcán nos aseguramos de cumplir con los gustos y necesidades de cada huésped."
        image="/assets/images/comedor-hotel-valle-del-volcan.jpeg"
        imageDescription="ALT"
      />
    </>
  );
};

export default RestaurantService;
