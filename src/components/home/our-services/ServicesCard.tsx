import React from "react";

interface ServicesCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  image,
  alt,
}) => {
  return (
    <div className="col-lg-6 service-card">
      <div className="service-box">
        <div className="service-wrapper">
          <div className="service-text">
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
          <div className="service-img">
            <img className="image-fit" src={image} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
