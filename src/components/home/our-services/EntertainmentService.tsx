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
        <div className="close-modal_container">
          <button onClick={toggleModal} className="close-modal-btn">X</button>
        </div>
        <p>
          Club Hotel Valle Del Volcán ofrece en sus diferentes salas, conciertos
          de guitarra y música en general, u otra opción pueden ser los juegos
          como el bingo o de torneos de cartas, donde todos disfrutan de este
          tipo de reuniones. También podes disfrutar de nuestra sala de usos
          múltiples equipada con mesa de pool, ping pong, aparatos de gimnasia y
          colchonetas.
        </p>
      </Modal>
    </>
  );
};

export default EntertainmentService;
