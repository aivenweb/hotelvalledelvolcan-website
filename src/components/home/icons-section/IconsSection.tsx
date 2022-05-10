import React from "react";
import './IconsSection.css'

interface IconsSectionProps {}

const IconsSection: React.FC<IconsSectionProps> = () => {
  return (
    <div id="icon-section">
      <section className="best">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-1.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-2.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">Sea View Balcony</h6>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-3.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">Pool &amp; Spa</h6>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-4.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">Wifi Coverage</h6>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-5.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">AwESOME pACKAGES</h6>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-6.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">cLEANING eVERDAY</h6>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-7.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">bUTFFET Breakfast</h6>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="wrap-best">
                <div className="icon-best">
                  <img
                    src="./Home 1_files/about-icon-8.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h6 className="sky-h6">Airport Taxi</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconsSection;