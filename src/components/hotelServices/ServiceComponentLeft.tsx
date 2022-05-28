import React from "react";

interface ServiceComponentLeftProps {
  mainImage: string;
  secondaryImage: string;
  serviceTitle: string;
  serviceDescription: string;
}

const ServiceComponentLeft: React.FC<ServiceComponentLeftProps> = ({
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
          <div className="text">
            <h2 className="h2-rooms">{serviceTitle}</h2>
            <p>{serviceDescription}</p>
          </div>
          <div className="img2">
            <img style={{ height: "270px" }} src={secondaryImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponentLeft;
