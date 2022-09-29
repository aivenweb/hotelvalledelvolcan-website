import React from "react";
import "./CarouselComponent.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselComponentProps {}

const CarouselComponent: React.FC<CarouselComponentProps> = () => {
  return (
    <div id="main-carousel" className="carousel-wrapper">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        transitionTime={1000}
        swipeable={false}
        infiniteLoop
        autoPlay
      >
        <div className="item">
          <img
            src="/assets/images/portada2-hotel-valle-del-volcan.jpg"
            className="img-responsive"
            alt=""
          />
          <div className="carousel-caption">
            <h1>Hotel Valle del Volcán</h1>
            <p>
              <span className="line-t"></span>Un lugar diferente para tus
              vacaciones
              <span className="line-b"></span>
            </p>
          </div>
        </div>
        <div className="item">
          <img
            src="/assets/images/portada-hotel-valle-del-volcan.jpg"
            className="img-responsive"
            alt=""
          />
          <div className="carousel-caption-2">
            <h2>
            Disfruta de la naturaleza unica de Copahue!
            </h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
