import React from "react";
import ServicesCard from "./ServicesCard";
import Modal from "react-modal";

interface RestaurantServiceProps {
  isOpen: boolean;
  toggleModal: any;
}

const RestaurantService: React.FC<RestaurantServiceProps> = ({
  isOpen,
  toggleModal,
}) => {
  return (
    <>
      <ServicesCard
        title="Restaurante"
        description="Descripción"
        image="/assets/images/comedor-hotel-valle-del-volcan.jpeg"
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

export default RestaurantService;
