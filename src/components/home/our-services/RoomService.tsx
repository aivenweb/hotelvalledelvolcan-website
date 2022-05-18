import React from "react";
import ServicesCard from "./ServicesCard";
import Modal from "react-modal";

interface RoomServiceProps {
  isOpen: boolean;
  toggleModal: any;
}

const RoomService: React.FC<RoomServiceProps> = ({ isOpen, toggleModal }) => {
  return (
    <>
      <ServicesCard
        title="Habitaciones"
        description="Nuestras instalaciones están totalmente equipadas para garantizar su comodidad."
        image="/assets/images/habitacion-hotel-valle-del-volcan.jpg"
        imageDescription="ALT"
        toggleModal={toggleModal}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={400}
      >
        <div className="close-modal_container">
          <button onClick={toggleModal} className="close-modal-btn">
            X
          </button>
        </div>
        <p>
          En Club Hotel Valle Del Volcán, las habitaciones están equipadas con
          baño privado, televisión satelital en cada una, calefacción central y
          WI-FI. También ofrecemos servicio de lavandería, servicio de caja
          fuerte, restaurante y una estufa hogar para que puedas disfrutar de un
          ambiente cálido y tranquilo.
        </p>
      </Modal>
    </>
  );
};

export default RoomService;
