import React from "react";
import './Rooms.css'

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
  return (
    <section id="rooms">
      <div className="container">
        <h2 className="title-room"> Nuestras Habitaciones</h2>
        <p className="line"></p>
        <div className="wrap-rooms">
            <div className="row">
                <div className="rooms">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <div className="wrap-box">
                            <div className="box-img">
                                <img src="" alt="" className="img-responsive" />
                            </div>
                            <div className="rooms-content">
                                <h4 className="sky-h4">Luxury Room</h4>
                                <p className="price">$320 / Per Night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
