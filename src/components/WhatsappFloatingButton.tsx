import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface WhatsappFloatingButtonProps {}

const WhatsappFloatingButton: React.FC<WhatsappFloatingButtonProps> = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5491122578646"
      className="whatsapp-floating-btn"
      target="_blank"
    >
      <FontAwesomeIcon className="whatsapp-float-icon" icon={faWhatsapp} />
    </a>
  );
};

export default WhatsappFloatingButton;
