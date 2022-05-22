import React from "react";
import RoomCard from "./RoomCard";
import "./Rooms.css";

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
  return (
    <section id="rooms">
      <div className="container">
        <h2 className="title-room"> Nuestros precios</h2>
        <p className="line"></p>
        <div className="wrap-rooms">
          <div className="row">
            <div className="rooms">
              <RoomCard
                title="Jornada sin pensión"
                image="/assets/images/habitacion2-hotel-valle-del-volcan.jpg"
                imageDescription="alt"
                price={500}
              />
              <RoomCard
                title="Jornada con media pensión"
                image="/assets/images/pool-hotel-valle-del-volcan.jpg"
                imageDescription="alt"
                price={600}
              />
              <RoomCard
                title="Jornada con pensión completa"
                image="/assets/images/vinos-hotel-valle-del-volcan.jpg"
                imageDescription="alt"
                price={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
