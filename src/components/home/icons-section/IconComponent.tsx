import React from 'react';

interface IconProps {
    title: string;
    image: string;
    imageDescription: string;
}

const Icon: React.FC<IconProps> = ({title, image, imageDescription}) => {
    return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src={image}
                    className="img-responsive icon-image"
                    alt={imageDescription}
                  />
                </div>
                <h6 className="sky-h6">{title}</h6>
              </div>
            </div>
    )
}

export default Icon;