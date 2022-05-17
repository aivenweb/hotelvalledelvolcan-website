import React from "react";
import ServicesCard from "./ServicesCard";
import Modal from "react-modal";

interface EntertainmentServiceProps {
  isOpen: boolean;
  toggleModal: any;
}

const EntertainmentService: React.FC<EntertainmentServiceProps> = ({
  isOpen,
  toggleModal,
}) => {
  return (
    <>
      <ServicesCard
        title="Entretenimiento"
        description="Descripción"
        image="/assets/images/entretenimiento-hotel-valle-del-volcan.jpg"
        imageDescription="ALT"
        toggleModal={toggleModal}
      />

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        Info de modal
      </Modal>
    </>
  );
};

export default EntertainmentService;
