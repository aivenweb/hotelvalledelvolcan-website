import React from "react";
import BannerComponent from "../BannerComponent";
import Header from "../home/header/Header";

interface HotelServicesPageComponentProps {}

const HotelServicesPageComponent: React.FC<
  HotelServicesPageComponentProps
> = () => {
  return (
    <>
      <Header />
      <BannerComponent title="Nuestros servicios" description="Lorem Ipsum is simply dummy text of the printing"/>
    </>
  );
};

export default HotelServicesPageComponent;
