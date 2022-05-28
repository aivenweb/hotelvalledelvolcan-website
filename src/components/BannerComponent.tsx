import React from "react";

interface BannerComponentProps {
  title: string;
  description: string;
}

const BannerComponent: React.FC<BannerComponentProps> = ({ title, description }) => {
  return (
    <section
      style={{
        background: `url('${process.env.PUBLIC_URL}/assets/images/banner-hotel-valle-del-volcan.jpg')`
      }}
      className="banner-tems text-center"
    >
      <div className="container">
        <div className="banner-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
