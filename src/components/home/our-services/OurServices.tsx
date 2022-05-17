import React, { useState } from "react";
import "./OurServices.css";
import EntertainmentService from "./EntertainmentService";
import OutdoorService from "./OutdoorService";
import RestaurantService from "./RestaurantService";
import RoomService from "./RoomService";

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  const [roomModalIsOpen, setRoomModalIsOpen] = useState(false);
  const [entertainmentModalIsOpen, setEntertainmentModalIsOpen] =
    useState(false);
  const [outdoorModalIsOpen, setOutdoorModalIsOpen] = useState(false);
  const [restauirantIsOpen, setRestaurantIsOpen] = useState(false);

  function RoomToggleModal() {
    setRoomModalIsOpen(!roomModalIsOpen);
  }
  function EntertainmentToggleModal() {
    setEntertainmentModalIsOpen(!entertainmentModalIsOpen);
  }
  function OutdoorToggleModal() {
    setOutdoorModalIsOpen(!outdoorModalIsOpen);
  }
  function RestaurantToggleModal() {
    setRestaurantIsOpen(!restauirantIsOpen);
  }

  return (
    <div id="our-services">
      <section className="section-our-services">
        <div className="container">
          <div className="section-header">
            <div className="section-heading">
              <h3 className="section-title">Nuestros servicios</h3>
              {/* <div className="section-description">
                <p>
                  Hotel valle del volcán es un establecimiento tres estrellas
                  atendido por sus dueños, con un trato personalizado y cuidado
                  hacia todos nuestros clientes. Nuestra política de venta Low
                  Cost nos permite siempre brindar el precio más bajo del
                  mercado, garantizando una relación precio-calidad excelente.
                </p>
              </div> */}
            </div>
          </div>
          <div className="services-row">
            <RoomService
              isOpen={roomModalIsOpen}
              toggleModal={RoomToggleModal}
            />
            <EntertainmentService
              isOpen={entertainmentModalIsOpen}
              toggleModal={EntertainmentToggleModal}
            />
            <OutdoorService
              isOpen={outdoorModalIsOpen}
              toggleModal={OutdoorToggleModal}
            />
            <RestaurantService
              isOpen={restauirantIsOpen}
              toggleModal={RestaurantToggleModal}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
