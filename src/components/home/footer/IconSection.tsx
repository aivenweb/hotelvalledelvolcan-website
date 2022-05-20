import React from "react";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconsSectionProps {}

const IconSection: React.FC<IconsSectionProps> = () => {
  return (
    <div className="footer-icon-l">
      <a
        href="https://www.facebook.com/clubhotelvalledelvolcan"
        title="Facebook"
      >
        <FontAwesomeIcon icon={faFacebookSquare} /> 
      </a>
      <a
        href="https://www.instagram.com/copahue/"
        title="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://twitter.com/valledelvolcan"
        title="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5491122578646"
        title="Whatsapp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default IconSection;
