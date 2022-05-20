import React from "react";
import CheckAvailability from "../CheckAvailability";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {
  return (
    <div id="cover">
      <section className="section-slider height-v">
        <div className="item">
          <img
            alt="Third slide"
            src="/assets/images/portada-hotel-valle-del-volcan.jpg"
            className="img-responsive"
          />
          <div className="carousel-caption">
            <h1>Hotel Valle del Volcán</h1>
            <p>
              <span className="line-t"></span>Un lugar diferente para tus vacaciones
              <span className="line-b"></span> 
            </p>
          </div>
        </div>
        <CheckAvailability />
      </section>
    </div>
  );
};

export default Cover;
