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
        <div className="close-modal_container">
          <button onClick={toggleModal} className="close-modal-btn">X</button>
        </div>
        <p>
          En Club Hotel Valle Del Volcán las comidas se realizan de forma
          casera, También contamos con un menú fijo y dietas especiales a pedido
          de nuestros clientes. Ofrecemos desayuno continental con panes caseros
          y mermeladas caseras, tostadas, jugo de naranjas, frutas, medialunas y
          cafetería de primera calidad.
        </p>
      </Modal>
    </>
  );
};

export default RestaurantService;
