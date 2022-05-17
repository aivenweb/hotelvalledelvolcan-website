import React from "react";
import ServicesCard from "./ServicesCard";
import Modal from "react-modal";

interface OutdoorServiceProps {
  isOpen: boolean;
  toggleModal: any;
}

const OutdoorService: React.FC<OutdoorServiceProps> = ({
  isOpen,
  toggleModal,
}) => {
  return (
    <>
      <ServicesCard
        title="Actividades al aire libre"
        description="Descripción"
        image="/assets/images/actividades-hotel-valle-del-volcan.jpg"
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

export default OutdoorService;
