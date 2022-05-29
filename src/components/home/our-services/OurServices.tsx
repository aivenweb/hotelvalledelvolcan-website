import React from "react";
import { useHistory } from "react-router-dom";
import "./OurServices.css";
import ServicesCard from "./ServicesCard";

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  const history = useHistory();

  return (
    <div id="our-services">
      <section className="section-our-services">
        <div className="container">
          <div className="section-header">
            <div className="section-heading">
              <h2 className="section-title">Nuestros servicios</h2>
            </div>
          </div>
          <div className="services-row">
            <ServicesCard
              title="Habitaciones"
              description="Nuestras instalaciones están totalmente equipadas para garantizar su comodidad."
              image="/assets/images/habitacion-hotel-valle-del-volcan.jpg"
              imageDescription="ALT"
            />
            <ServicesCard
              title="Entretenimiento"
              description="Hotel Valle del Volcán ofrece diversas actividades para su entretenimiento."
              image="/assets/images/entretenimiento-hotel-valle-del-volcan.jpg"
              imageDescription="ALT"
            />
            <ServicesCard
              title="Actividades al aire libre"
              description="Copahue les ofrece a todos los turistas diversas actividades al aire libre."
              image="/assets/images/actividades-hotel-valle-del-volcan.jpg"
              imageDescription="ALT"
            />
            <ServicesCard
              title="Restaurante"
              description="En Hotel Valle del Volcán nos aseguramos de cumplir con los gustos y necesidades de cada huésped."
              image="/assets/images/comedor-hotel-valle-del-volcan.jpeg"
              imageDescription="ALT"
            />
          </div>
          <div
            onClick={() => history.push("/nuestros-servicios")}
            className="text-center"
          >
            <button className="view-more-btn">Ver más</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
