import React from "react";

interface ImageComponentProps {
  image: string;
  imageDescription: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  image,
  imageDescription,
}) => {
  return (
    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
      <div className="wrap-box">
        <div className="box-img">
          <img
            src={image}
            className="img-responsive"
            alt={imageDescription}
          />
        </div>
        {/* <div className="gallery-box-main">
          <div className="gallery-icon">
            <a
              className="lightbox"
              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-4-4.jpg"
              data-littlelightbox-group="gallery"
              title="Flying is life"
            >
              <i className="ion-ios-plus-empty" aria-hidden="true"></i>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ImageComponent;
