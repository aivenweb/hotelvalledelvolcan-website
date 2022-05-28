import React from "react";
import BannerComponent from "../BannerComponent";
import Header from "../header/Header";
import ServiceComponentLeft from "./ServiceComponentLeft";
import ServiceComponentRight from "./ServiceComponentRight";

interface HotelServicesPageComponentProps {}

const HotelServicesPageComponent: React.FC<
  HotelServicesPageComponentProps
> = () => {
  return (
    <>
      <Header />
      <BannerComponent
        title="Nuestros servicios"
        description="Lorem Ipsum is simply dummy text of the printing"
      />
      <section className="body-room-3">
        <div className="container">
          <div className="wrap-room-3">
            <div className="row">
              <ServiceComponentRight
                mainImage="/assets/images/services/habitacion-3-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/habitacion-4-hotel-valle-del-volcan.jpg"
                serviceTitle="Nuestras Habitaciones"
                serviceDescription=""
              />
              <ServiceComponentLeft
                mainImage="/assets/images/services/entretenimiento-pool-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/entretenimiento-gimnasia-hotel-valle-del-volcan.jpg"
                serviceTitle="Entretenimiento en Hotel Valle del Volcán"
                serviceDescription=""
              />
              <ServiceComponentRight
                mainImage="/assets/images/services/restaurante-1-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/restaurante-2-hotel-valle-del-volcan.jpg"
                serviceTitle="Nuestro Restaurante"
                serviceDescription=""
              />
              <ServiceComponentLeft
                mainImage="/assets/images/services/actividades-1-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/actividades-2-hotel-valle-del-volcan.jpg"
                serviceTitle="Actividades al aire libre en Copahue"
                serviceDescription=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelServicesPageComponent;
