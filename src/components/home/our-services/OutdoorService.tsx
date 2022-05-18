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
        description="Copahue les ofrece a todos los turistas diversas actividades al aire libre."
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
        <div className="close-modal_container">
          <button onClick={toggleModal} className="close-modal-btn">X</button>
        </div>
        <p>
          La naturaleza de Copahue ofrece paseos a caballo, senderismo, visitas
          a cascadas, ascenso al volcán Copahue, avistaje de Laguna Las Mellizas
          y muchísimas cosas más a parte de la bellisima actividad termal que es
          el atractivo principal del lugar.
        </p>
      </Modal>
    </>
  );
};

export default OutdoorService;
