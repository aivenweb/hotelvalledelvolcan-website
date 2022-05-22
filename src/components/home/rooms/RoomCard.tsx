import React from "react";

interface RoomCardProps {
  image: string;
  imageDescription: string;
  title: string;
  price: number;
}

const RoomCard: React.FC<RoomCardProps> = ({
  image,
  imageDescription,
  title,
  price,
}) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
      <div className="wrap-box">
        <div className="box-img">
          <img src={image} alt={imageDescription} className="img-responsive" />
        </div>
        <div className="rooms-content">
          <h4 className="sky-h4">{title}</h4>
          <p className="price">${price} / noche</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
