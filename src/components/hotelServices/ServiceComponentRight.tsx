import React from "react";

interface ServiceComponentRightProps {
  mainImage: string;
  secondaryImage: string;
  serviceTitle: string;
  serviceDescription: string;
}

const ServiceComponentRight: React.FC<ServiceComponentRightProps> = ({
  mainImage,
  secondaryImage,
  serviceTitle,
  serviceDescription,
}) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-lg-offset-1 service-component">
      <div className="wrap-item">
        <div className="img">
          <img className="img-responsive" src={mainImage} alt="" />
        </div>
        <div className="text-room-3">
          <div className="img1">
            <img style={{ height: "270px" }} src={secondaryImage} alt="" />
          </div>
          <div className="text">
            <h2>{serviceTitle}</h2>
            <p>{serviceDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponentRight;
