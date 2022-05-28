import React from "react";
import { useHistory } from "react-router-dom";
import "./OurServices.css";
import EntertainmentService from "./EntertainmentService";
import OutdoorService from "./OutdoorService";
import RestaurantService from "./RestaurantService";
import RoomService from "./RoomService";

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
            <RoomService/>
            <EntertainmentService/>
            <OutdoorService/>
            <RestaurantService/>
          </div>
          <div onClick={() => history.push('/nuestros-servicios')} className="text-center">
            <button className="view-more-btn">Ver más</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
