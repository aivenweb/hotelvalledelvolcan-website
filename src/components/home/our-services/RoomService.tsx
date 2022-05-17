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
        description="Descripción"
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
        Info de modal
      </Modal>
    </>
  );
};

export default RoomService;
