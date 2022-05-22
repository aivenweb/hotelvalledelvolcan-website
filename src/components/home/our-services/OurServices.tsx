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
              <h2 className="section-title">Nuestros servicios</h2>
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
          <div className="text-center">
            <button className="view-more-btn">Ver más</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
