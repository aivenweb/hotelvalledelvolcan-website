import React from "react";
import CheckoutSection from "./CheckoutSection";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {
  return (
    <div id="cover">
      <section className="section-slider height-v">
        <div className="owl-stage-outer">
          <div className="owl-item active" style={{ width: "1905px" }}>
            <div className="item">
              <img
                alt="Third slide"
                src="https://static-cse.canva.com/blob/214565/50-Amazing-Book-Covers_featured-image.d256ef68.png"
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
          </div>
        </div>
        <CheckoutSection />
      </section>
    </div>
  );
};

export default Cover;
