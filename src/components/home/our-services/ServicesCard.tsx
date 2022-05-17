import React from "react";

interface ServicesCardProps {
  title: string;
  description: string;
  image: string;
  imageDescription: string;
  toggleModal: any
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  image,
  imageDescription,
  toggleModal
}) => {
  return (
    <div className="col-lg-6">
      <div className="service-box">
        <div className="service-wrapper">
          <div className="service-text">
            <h5>{title}</h5>
            <p>{description}</p>
            <button onClick={toggleModal} className="see-more-btn">Ver más</button>
          </div>
          <div className="service-img">
            <img className="image-fit" src={image} alt={imageDescription} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
