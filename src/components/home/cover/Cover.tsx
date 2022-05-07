import React from "react";

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
                    src="./assets/images/Slider-v1.jpg"
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
                    src="assets/images/Slider-v2.jpg"
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
              <div className="owl-item" style={{ width: "905px" }}>
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
              <div className="owl-item active" style={{ width: "1905px" }}>
                <div className="item">
                  <img
                    alt="Third slide"
                    src="./Home 1_files/Slider-v2.jpg"
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
                    src="./Home 1_files/Slider-v2.jpg"
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
        <div className="check-avail check-avail-v3">
          <div className="container">
            <div className="arrival date-title">
              <label>Arrival Date </label>
              <div
                id="datepicker"
                className="input-group date"
                data-date-format="dd-mm-yyyy"
              >
                <input className="form-control" type="text" />
                <span className="input-group-addon">
                  <img src="./Home 1_files/date-icon.png" alt="#" />
                </span>
              </div>
            </div>
            <div className="departure date-title">
              <label>Departure Date </label>
              <div
                id="datepickeri"
                className="input-group date"
                data-date-format="dd-mm-yyyy"
              >
                <input className="form-control" type="text" />
                <span className="input-group-addon">
                  <img src="./Home 1_files/date-icon.png" alt="#" />
                </span>
              </div>
            </div>
            <div className="adults date-title">
              <label>Adults</label>
              <form>
                <div className="carousel-search">
                  <div className="btn-group">
                    <a
                      className="btn dropdown-toggle"
                      data-toggle="dropdown"
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                    >
                      2
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <div>1</div>
                      </li>
                      <li>
                        <div>2</div>
                      </li>
                      <li>
                        <div>3</div>
                      </li>
                      <li>
                        <div>4</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="children date-title">
              <label>Children</label>
              <form>
                <div className="carousel-search">
                  <div className="btn-group">
                    <a
                      className="btn dropdown-toggle"
                      data-toggle="dropdown"
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                    >
                      2
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <div>1</div>
                      </li>
                      <li>
                        <div>2</div>
                      </li>
                      <li>
                        <div>3</div>
                      </li>
                      <li>
                        <div>4</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="find_btn date-title">
              <div className="text-find">
                Check
                <br />
                Availability
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
