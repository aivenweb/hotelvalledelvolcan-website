import React from "react";
import CheckoutSection from "./CheckoutSection";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {
  return (
    <div id="cover">
      <section className="section-slider height-v">
        <div
          id="index12"
          className="owl-carousel owl-theme owl-loaded owl-drag"
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-5715px, 0px, 0px)",
                transition: "all 0.25s ease 0s",
                width: "11430px",
              }}
            >
              <div className="owl-item cloned" style={{ width: "1905px" }}>
                <div className="item">
                  <img
                    alt="Third slide"
                    src="./Home 1_files/Slider-v1.jpg"
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
              <div className="owl-item cloned" style={{ width: "1905px" }}>
                <div className="item">
                  <img
                    alt="Third slide"
                    src="/assets/images/portada-hotel-valle-del-volcan.jpg"
                    className="img-responsive"
                  />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1 className="v2">Enjoy a Luxury Experience</h1>
                      <p className="p-v2">
                        <span className="line-t"></span>Hotels &amp; Resorts
                        <span className="line-b"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: "1905px" }}>
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
              </div>
              <div className="owl-item active" style={{ width: "1905px" }}>
                <div className="item">
                  <img
                    alt="Third slide"
                    src="/assets/images/portada-hotel-valle-del-volcan.jpg"
                    className="img-responsive"
                  />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1 className="v2">Enjoy a Luxury Experience</h1>
                      <p className="p-v2">
                        <span className="line-t"></span>Hotels &amp; Resorts
                        <span className="line-b"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "1905px" }}>
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
              </div>
              <div className="owl-item cloned" style={{ width: "1905px" }}>
                <div className="item">
                  <img
                    alt="Third slide"
                    src="/assets/images/portada-hotel-valle-del-volcan.jpg"
                    className="img-responsive"
                  />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1 className="v2">Enjoy a Luxury Experience</h1>
                      <p className="p-v2">
                        <span className="line-t"></span>Hotels &amp; Resorts
                        <span className="line-b"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev">prev</div>
            <div className="owl-next">next</div>
          </div>
          <div className="owl-dots">
            <div className="owl-dot">
              <span></span>
            </div>
            <div className="owl-dot active">
              <span></span>
            </div>
          </div>
        </div>
        <CheckoutSection />
      </section>
    </div>
  );
};

export default Cover;
