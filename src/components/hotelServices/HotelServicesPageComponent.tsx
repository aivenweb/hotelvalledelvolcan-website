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
      />
      <section className="body-room-3">
        <div className="container">
          <div className="wrap-room-3">
            <div className="row">
              <ServiceComponentRight
                mainImage="/assets/images/services/habitacion-3-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/habitacion-4-hotel-valle-del-volcan.jpg"
                serviceTitle="Nuestras Habitaciones"
                serviceDescription="En Club Hotel Valle Del Volcán, las habitaciones están equipadas con
                baño privado, televisión satelital en cada una, calefacción central y
                WI-FI. También ofrecemos servicio de lavandería, servicio de caja
                fuerte, restaurante y una estufa hogar para que puedas disfrutar de un
                ambiente cálido y tranquilo."
              />
              <ServiceComponentLeft
                mainImage="/assets/images/services/entretenimiento-pool-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/entretenimiento-gimnasia-hotel-valle-del-volcan.jpg"
                serviceTitle="Entretenimiento en Hotel Valle del Volcán"
                serviceDescription="Club Hotel Valle Del Volcán ofrece en sus diferentes salas, conciertos
                de guitarra y música en general, u otra opción pueden ser los juegos
                como el bingo o de torneos de cartas, donde todos disfrutan de este
                tipo de reuniones. También podes disfrutar de nuestra sala de usos
                múltiples equipada con mesa de pool, ping pong, aparatos de gimnasia y
                colchonetas."
              />
              <ServiceComponentRight
                mainImage="/assets/images/services/restaurante-1-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/restaurante-2-hotel-valle-del-volcan.jpg"
                serviceTitle="Nuestro Restaurante"
                serviceDescription="La naturaleza de Copahue ofrece paseos a caballo, senderismo, visitas
                a cascadas, ascenso al volcán Copahue, avistaje de Laguna Las Mellizas
                y muchísimas cosas más a parte de la bellisima actividad termal que es
                el atractivo principal del lugar."
              />
              <ServiceComponentLeft
                mainImage="/assets/images/services/actividades-1-hotel-valle-del-volcan.jpg"
                secondaryImage="/assets/images/services/actividades-2-hotel-valle-del-volcan.jpg"
                serviceTitle="Actividades al aire libre en Copahue"
                serviceDescription="En Club Hotel Valle Del Volcán las comidas se realizan de forma
                casera, También contamos con un menú fijo y dietas especiales a pedido
                de nuestros clientes. Ofrecemos desayuno continental con panes caseros
                y mermeladas caseras, tostadas, jugo de naranjas, frutas, medialunas y
                cafetería de primera calidad."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelServicesPageComponent;
