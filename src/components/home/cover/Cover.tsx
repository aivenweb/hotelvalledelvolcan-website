import React from "react";
import CheckoutSection from "./CheckoutSection";

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
            <h1>Welcome to Skyline</h1>
            <p>
              <span className="line-t"></span>Hotels &amp; Resorts
              <span className="line-b"></span>
            </p>
          </div>
        </div>
        <CheckoutSection />
      </section>
    </div>
  );
};

export default Cover;